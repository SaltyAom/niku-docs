import Head from 'next/head'

import { BlogOpenGraphComponent } from "./types"

const web = "https://niku.saltyaom.com"

const BlogOpenGraph: BlogOpenGraphComponent = ({
    title,
}) => (
        <Head>
            <title>{title}</title>
            <meta name="title" content={title} />

            <meta property="og:title" content={`${title} - Niku Blog`} />
            <meta property="og:image" content={`${web}/blog/${title}/cover.jpg`} />
            <meta property="og:image:alt" content={title} />

            <meta name="twitter:card" content="description_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:image" content={`${web}/blog/${title}/cover.jpg`} />

            <link rel="canonical" href={web} />
        </Head>
    )


export default BlogOpenGraph
