import { FunctionComponent } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { existsSync, readFileSync } from 'fs'
import { resolve } from 'path'

import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { MdxRemote } from 'next-mdx-remote/types'

import { DocumentationLayout } from '@layouts'
import { DocumentationNavigation } from '@layouts/documentation/types'

import { DocumentationComponents } from '@components/module'

import { documentationsPath } from '@services/fs'
import { navigationIdList, navigationList } from '@services/constants'

export interface DocumentationProps {
    content: MdxRemote.Source
    sections: string[]
    navigation: DocumentationNavigation
}

export type DocumentationComponent = FunctionComponent<DocumentationProps>

const Documentation: DocumentationComponent = ({
    content,
    sections,
    navigation
}) => {
    let documentation = hydrate(content, {
        components: DocumentationComponents
    })

    return (
        <DocumentationLayout navigation={navigation} contents={sections}>
            {documentation}
        </DocumentationLayout>
    )
}

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: documentationsPath.map((docs) => ({
        params: {
            docs
        }
    })),
    fallback: false
})

export const getStaticProps: GetStaticProps<DocumentationProps> = async (
    context
) => {
    const title = ((context.params?.docs as string[]) || ['index']).join('/')

    const file = existsSync(resolve(`./docs/${title}.mdx`))
        ? resolve(`./docs/${title}.mdx`)
        : resolve(`./docs/${title}/index.mdx`)

    const documentation = readFileSync(file, {
        encoding: 'utf8'
    })

    const sections =
        documentation
            .match(/[^#]## (.*)/g)
            ?.map((a) => a.replace('\n## ', '').replace(':', '')) || []

    const content = await renderToString(documentation, {
        components: DocumentationComponents
    })

    const index = navigationIdList.indexOf(title)

    const navigation = {
        previous: index > 0 ? navigationList[index - 1] : '',
        current: navigationList[index] || 'Documentation',
        next: index < navigationList.length - 1 ? navigationList[index + 1] : ''
    }

    return {
        props: {
            content,
            sections,
            navigation
        }
    }
}

export default Documentation
