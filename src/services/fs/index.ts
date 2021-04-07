import fs from 'fs'
import { join } from 'path'

export const getFiles = (path: string): string[][] => {
    const files: string[][] = []

    fs.readdirSync(path).forEach((file) => {
        const subpath = join(path, file)

        // eslint-disable-next-line no-unused-vars
        if (fs.lstatSync(subpath).isDirectory())
            return getFiles(subpath).map((filePath) => files.push(filePath))

        files.push(
            subpath
                .replace('docs/', '')
                .replace('blog/', '')
                .replace('.mdx', '')
                .replace(/ /, '-')
                .split('/')
        )
    })

    return files
}

export const documentationsFile = getFiles('./docs')
export const documentationsPath = documentationsFile.map((paths) => {
    if (paths[paths.length - 1] === 'index') paths.pop()

    return paths
})
export const documentationList = documentationsFile.flat(Infinity)

export const blogPaths = getFiles('./blog').flat(Infinity)