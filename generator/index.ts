import { readFile, stat, readdir } from 'fs/promises'

const catchWidget = /class (.*)? extends StatelessWidget(.*)? with([^{]+)/gs
const catchProperty = /class([^{]+){([^(]+)/gs
const catchFactory = /factory ([^(]+)/gs
const catchGetSet =
    /(get|set) ([\w]+)([^{=;]+)(\{(?:[^}{]+|\{(?:[^}{]+|\{[^}{]*\})*\})*\}|[^;]+)/gs

const widgetWhitelist = ['niku.dart', 'widget.dart', 'macros.dart']

const capitalize = (string: string) =>
    string.charAt(0).toUpperCase() + string.slice(1)

const decapitalize = ([first, ...rest]: string) =>
    first.toLowerCase() + rest.join('')

const main = async () => {
    const source = await stat('./niku')

    if (!source.isDirectory()) throw new Error('./niku is not directory')

    const [widgetFiles, macroFiles, objectFiles] = await Promise.all([
        readdir('./niku/lib/widget'),
        readdir('./niku/lib/macros'),
        readdir('./niku/lib/objects')
    ])

    const macros: Map<
        string,
        {
            type: 'get' | 'set'
            name: string
            argument: string
            code: string
        }
    > = new Map()
    await Promise.all(
        macroFiles
            .filter((file) => !widgetWhitelist.includes(file))
            // Use map to return empty promise
            .map(async (file) => {
                const widget = await readFile(`./niku/lib/macros/${file}`, {
                    encoding: 'utf-8'
                })

                const matched = [...widget.matchAll(catchGetSet)]

                if (!matched.length)
                    throw new Error(`Can't find Niku widget class in ${file}`)

                matched.forEach(([, type, name, argument, code]) => {
                    if (!code || name.startsWith('_')) return

                    macros.set(
                        `${capitalize(file).replace('.dart', '')}Macro`,
                        {
                            type: type as 'get' | 'set',
                            name,
                            argument,
                            code: code.trim().replace(/^=>/, '').trim()
                        }
                    )
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
                    .map((a) => macros.get(a))
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
                        .filter((a) => a && a !== ' ')
                }
            })
    )
}

main()
