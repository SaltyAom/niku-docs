import { FunctionComponent } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'

import { readFileSync } from 'fs'
import { resolve } from 'path'

import hydrate from 'next-mdx-remote/hydrate'
import renderToString from 'next-mdx-remote/render-to-string'
import { MdxRemote } from 'next-mdx-remote/types'

import { BlogLayout } from '@layouts'

import { DocumentationComponents } from '@components/module'

import { blogPaths } from '@services/fs'

export interface DocumentationProps {
    content: MdxRemote.Source
    title: string
}

export type DocumentationComponent = FunctionComponent<DocumentationProps>

const Documentation: DocumentationComponent = ({ content, title }) => {
    let blog = hydrate(content, {
        components: DocumentationComponents
    })

    return <BlogLayout title={title}>{blog}</BlogLayout>
}

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: blogPaths.map((blog) => ({
        params: {
            blog
        }
    })),
    fallback: false
})

export const getStaticProps: GetStaticProps<DocumentationProps> = async (
    context
) => {
    const title = context.params?.blog as string

    const file = resolve(`./blog/${title}.mdx`)

    const blog = readFileSync(file, {
        encoding: 'utf8'
    })

    const content = await renderToString(blog, {
        components: DocumentationComponents
    })

    return {
        props: {
            content,
            title
        }
    }
}

export default Documentation
