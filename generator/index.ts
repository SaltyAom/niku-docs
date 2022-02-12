import { readFile, stat, readdir } from 'fs/promises'

const catchWidget = /class (.*)? extends StatelessWidget(.*)? with([^{]+)/gs
const catchProperty = /class([^{]+){([^(]+)/gs
const catchFactory = /factory ([^(]+)/gs
const catchGetSet =
    /(get|set) ([\w]+)([^{=;]+)(\{(?:[^}{]+|\{(?:[^}{]+|\{[^}{]*\})*\})*\}|[^;]+)/gs
const catchFunction =
    /(void) ([\w]+)\((?:[^)(]+|\((?:[^)(]+|\([^)(]*\))*\))*\)([^>{]+)([^;]+|([^{=;]+|\{(?:[^}{]+|\{(?:[^}{]+|\{[^}{]*\})*\})*\}))/gs

const widgetWhitelist = ['niku.dart', 'widget.dart', 'macros.dart']

const capitalize = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1)

const main = async () => {
    const source = await stat('./niku')

    if (!source.isDirectory()) throw new Error('./niku is not directory')

    const [widgetFiles, macroFiles, objectFiles] = await Promise.all([
        readdir('./niku/lib/widget'),
        readdir('./niku/lib/macros'),
        readdir('./niku/lib/objects')
    ])

    const macros: Record<
        string,
        Array<{
            type: 'shortcut' | 'set' | 'hook'
            name: string
            argument: string
            code: string
            macro: string
        }>
    > = {}
    await Promise.all(
        macroFiles
            .filter((file) => !widgetWhitelist.includes(file))
            // Use map to return empty promise
            .map(async (file) => {
                const widget = await readFile(`./niku/lib/macros/${file}`, {
                    encoding: 'utf-8'
                })

                const matchedGetSet = [...widget.matchAll(catchGetSet)]

                if (!matchedGetSet.length)
                    throw new Error(`Can't find Niku widget class in ${file}`)

                matchedGetSet.forEach(([, type, name, argument, code]) => {
                    console.log(
                        `${capitalize(file).replace('.dart', '')}Macro`,
                        name
                    )

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

                const matchedFunction = [...widget.matchAll(catchFunction)]

                matchedFunction.forEach(([, name, argument, code]) => {
                    if (!code) return

                    const macro = `${capitalize(file).replace(
                        '.dart',
                        ''
                    )}Macro`

                    if (!macros[macro]) macros[macro] = []

                    macros[macro].push({
                        type: 'hook',
                        name,
                        argument,
                        code: code.trim().replace(/^=>/, '').trim(),
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

                return {
                    widget: name,
                    macros: macrosData,
                    factories,
                    properties: properties
                        .replaceAll(name, '')
                        .replaceAll(';', '')
                        .split('\n')
                        .map((a) => a.trimStart())
                        .filter((a) => a && a !== ' '),
                }
            })
    )
}

main()
