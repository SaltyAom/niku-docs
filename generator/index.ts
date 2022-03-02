import { existsSync } from 'fs'
import { readFile, stat, readdir, mkdir, writeFile } from 'fs/promises'
import { sync as rmdir } from 'rimraf'

const catchWidget = /class (.*)? extends StatelessWidget(.*)? with([^{]+)/gs
const catchProperty = /class([^{]+){([^(]+)/gs
const catchFactory = /factory ([^(]+)/gs
const catchGetSet =
    /(get|set) ([\w]+)([^{=;]+)(\{(?:[^}{]+|\{(?:[^}{]+|\{[^}{]*\})*\})*\}|[^;]+)/gs
const catchFunction =
    /(void) ([\w]+)\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\)([^>{]+)([^;]+|([^{=;]+|\{(?:[^}{]+|\{(?:[^}{]+|\{[^}{]*\})*\})*\}))/gs
const catchFunctionWithoutArrow =
    /(void) ([\w]+)\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\)([^>{]+)([^{=;]+|\{(?:[^}{]+|\{(?:[^}{]+|\{[^}{]*\})*\})*\})/gs

const widgetWhitelist = ['niku.dart', 'widget.dart', 'macros.dart', 'nikuBuild.dart']

const capitalize = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1)

const decapitalize = ([first, ...rest]: string) =>
    first.toLowerCase() + rest.join('')

type Macros = Array<{
    type: 'shortcut' | 'set' | 'hook'
    name: string
    argument: string
    code: string
    macro: string
}>

type MacroMap = Record<string, Macros>

const main = async () => {
    const source = await stat('./niku')

    if (!source.isDirectory()) throw new Error('./niku is not directory')

    const [widgetFiles, macroFiles] = await Promise.all([
        readdir('./niku/lib/widget'),
        readdir('./niku/lib/macros')
    ])

    const macros: MacroMap = {}
    await Promise.all(
        macroFiles
            .filter((file) => !widgetWhitelist.includes(file))
            // Use map to return empty promise
            .map(async (file) => {
                const macroFile = await readFile(`./niku/lib/macros/${file}`, {
                    encoding: 'utf-8'
                })

                const matchedGetSet = [...macroFile.matchAll(catchGetSet)]

                if (!matchedGetSet.length)
                    return

                matchedGetSet.forEach(([, type, name, argument, code]) => {
                    if (!code || name.startsWith('_') || name === 'build')
                        return

                    const macro = `${capitalize(file).replace(
                        '.dart',
                        ''
                    )}Macro`

                    if (!macros[macro]) macros[macro] = []

                    macros[macro].push({
                        type:
                            type === 'set'
                                ? 'set'
                                : type === 'get'
                                ? 'shortcut'
                                : 'hook',
                        name,
                        argument,
                        code: code.trim().replace(/^=>/, '').trim(),
                        macro
                    })
                })

                const matchedFunction = [...macroFile.matchAll(catchFunction)]

                matchedFunction.forEach(([, , name, argument, code]) => {
                    if (!code || name === 'void') return

                    const macro = `${capitalize(file).replace(
                        '.dart',
                        ''
                    )}Macro`

                    if (!macros[macro]) macros[macro] = []

                    let example = code.trim().replace(/^=>/, '').trim()
                    if (example.startsWith('{')) example += '\n}'

                    macros[macro].push({
                        type: 'hook',
                        name,
                        argument,
                        code: example,
                        macro
                    })
                })
            })
    )

    const widgets = await Promise.all(
        widgetFiles
            .filter((file) => !widgetWhitelist.includes(file))
            .map(async (file) => {
                const widget = await readFile(`./niku/lib/widget/${file}`, {
                    encoding: 'utf-8'
                })

                const matched = [...widget.matchAll(catchWidget)]

                if (!matched.length)
                    throw new Error(`Can't find Niku widget class in ${file}`)

                const [[, name, , macrosName]] = matched
                const [[, , properties]] = [...widget.matchAll(catchProperty)]

                let factories: string[] = []
                if (widget.includes('factory')) {
                    const matchedFactories = [...widget.matchAll(catchFactory)]

                    factories = matchedFactories.map(([, name]) => name)
                }

                const macrosData = macrosName
                    .split(',')
                    .map((a) => a.trim().split('<')[0])
                    .map((a) => macros[a])
                    .filter((a) => a)

                const localMacros: Macros = []

                /** Extract hook */
                const matchedFunction = [
                    ...widget.matchAll(catchFunctionWithoutArrow)
                ]

                matchedFunction.forEach(([, name, argument, code]) => {
                    if (!code || name === 'void') return

                    localMacros.push({
                        type: 'hook',
                        name,
                        argument,
                        code: code.trim(),
                        macro: name
                    })
                })

                return {
                    widget: name.split('<')[0],
                    macros: macrosData,
                    factories,
                    localMacros,
                    properties: properties
                        .replaceAll(name, '')
                        .replaceAll(';', '')
                        .split('\n')
                        .map((a) => a.trimStart())
                        .filter((a) => a && a !== ' ')
                        .map((a) => {
                            const [type, name, ...rest] = a.split(' ')

                            return `${name} ${type} ${rest
                                .join(' ')
                                .replace(',', ' ')}`.trim()
                        })
                }
            })
    )

    if (existsSync('./src/pages/docs/widgets'))
        rmdir('./src/pages/docs/widgets')
    await mkdir('./src/pages/docs/widgets')

    await Promise.all([
        widgets.forEach(
            async ({ widget, properties, factories, macros, localMacros }) => {
                const widgetName = widget.replace('Niku', '')

                let content = `---
layout: ../../../layouts/doc.astro
title: ${widgetName}
---
Representation of ${widgetName}
\n
To use this widget, simply import from the of the following:
\`\`\`dart
import 'package:niku/niku.dart';
import 'package:niku/namespace.dart';
import 'package:niku/widget/widget.dart';
import 'package:niku/widget/${decapitalize(widgetName)}.dart';
\`\`\`\n`

                if (factories.length) {
                    content += '## Factory method:\n'
                    factories.forEach((factory) => {
                        content += `- ${factory.split(".")[1]}\n`
                    })
                    content += '\n'
                }

                content += '\n## Cascasde properties:'
                properties.forEach((property) => `- ${property}\n`)

                content +=
                    '\nTo use dot cascade, simply use the following syntax:\n'
                content += '\n```dart\n'
                content += `${widget}
  ..${properties[0]?.split(' ')[0] ?? 'data'} = data
  ..${
      properties[1]?.split(' ')[0] ?? properties[0]?.split(' ')[0] ?? 'data'
  } = data`
                content += '\n```'

                content += '\n\n## Macros:\n'
                content +=
                    'This widget implement the following macros (shortcut):\n'
                macros.forEach(
                    (macroList) =>
                        (content += `- [${
                            macroList[0].macro
                        }](/docs/macros/${decapitalize(
                            macroList[0].macro.replace('Macro', '')
                        )})\n`)
                )
                content += '\n'

                if (localMacros.length) {
                    content += '\n\n## Local Macros:\n'
                    content += 'local macro that implements in this widget\n'

                    localMacros.forEach(
                        ({ type, name, argument, code, macro }, index) => {
                            if (index === 0) content += `## ${macro}\n\n`

                            content += `### ${name} \`${type}\`\n`

                            if (argument.trim()) {
                                content += `\nArguments:\n`
                                content += '```dart'
                                content += `\n${argument}\n`
                                content += '```\n'
                            }

                            content += `\nEquivalent to:\n`
                            content += '```dart'
                            content += `\n${code}\n`
                            content += '```\n\n'
                        }
                    )
                }

                macros.forEach((macroList) =>
                    macroList.forEach(
                        ({ type, name, argument, code, macro }, index) => {
                            if (index === 0) {
                                content += `## ${macro}\n`
                                content += `Implement [${macro}](/docs/macros/${decapitalize(
                                    macro.replace('Macro', '')
                                )}) abstract class\n\n`
                            }

                            content += `### ${name} \`${type}\`\n`

                            if (argument.trim()) {
                                content += `\nArguments:\n`
                                content += '```dart'
                                content += `\n${argument}\n`
                                content += '```\n'
                            }

                            content += `\nEquivalent to:\n`
                            content += '```dart'
                            content += `\n${code}\n`
                            content += '```\n\n'
                        }
                    )
                )

                await writeFile(
                    `./src/pages/docs/widgets/${decapitalize(widgetName)}.md`,
                    content
                )
            }
        )
    ])

    if (existsSync('./src/pages/docs/macros')) rmdir('./src/pages/docs/macros')
    await mkdir('./src/pages/docs/macros')

    await Promise.all([
        Object.entries(macros).forEach(async ([name, macro]) => {
            const macroName = decapitalize(name.replace('Macro', ''))

            let content = `---
layout: ../../../layouts/doc.astro
title: ${name}
---
Reusable shortcuts abstract class used in:\n`

            widgets
                .filter(({ macros }) => (macros[0]?.[0].macro == name))
                .forEach(({ widget }) => {
                    const widgetName = widget.replace('Niku', '')

                    content += `- [${widgetName}](/docs/widgets/${decapitalize(
                        widgetName
                    )})\n`
                })

            content += `\n\nTo use this macro, simply import from one of the following:
\`\`\`dart
import 'package:niku/niku.dart';
import 'package:niku/macros/macros.dart';
import 'package:niku/macros/${name}.dart';
\`\`\`\n`

            macro.forEach(({ type, name, argument, code, macro }, index) => {
                if (index === 0) content += `## ${macro}\n\n`

                content += `### ${name} \`${type}\`\n`

                if (argument.trim()) {
                    content += `\nArguments:\n`
                    content += '```dart'
                    content += `\n${argument}\n`
                    content += '```\n'
                }

                content += `\nEquivalent to:\n`
                content += '```dart'
                content += `\n${code}\n`
                content += '```\n\n'
            })

            await writeFile(
                `./src/pages/docs/macros/${decapitalize(macroName)}.md`,
                content
            )
        })
    ])

    if (existsSync('./src/components/generated'))
        rmdir('./src/components/generated')
    await mkdir('./src/components/generated')

    let chapters = `---
import Link from '../../components/link.astro'
---
<h4>Widgets</h4>
@widget

<h4>Macros</h4>
@macro
<Link href="/docs/extending-niku">Extending Niku</Link>`

    const widgetChapters: string[] = []
    const macroChapters: string[] = []

    widgets.forEach(({ widget }) => {
        const widgetName = decapitalize(widget.replace('Niku', ''))

        widgetChapters.push(
            `<Link href="/docs/widgets/${widgetName}">${widgetName}</Link>`
        )
    })

    Object.entries(macros).forEach(([, [{ macro }]]) => {
        const macroName = decapitalize(macro.replace('Macro', ''))

        macroChapters.push(
            `<Link href="/docs/macros/${macroName}">${macroName}</Link>`
        )
    })

    chapters = chapters
        .replace('@widget', widgetChapters.join('\n'))
        .replace('@macro', macroChapters.join('\n'))

    await writeFile('./src/components/generated/chapter.astro', chapters)
}

main()
