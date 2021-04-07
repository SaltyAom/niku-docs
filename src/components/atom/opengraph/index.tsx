import Head from 'next/head'

const title =
    'Niku - Effortless property builder for composing maintainable Flutter UI'
const description =
    "Effortless property builder for composing maintainable Flutter UI. Compose Flutter UI in a more declarative way, easier to maintain, and better developer experience. Niku helps developer to write less Flutter code, removing 'Nested Hell' while maintaining declarative UI at the same time."
const image = '/images/niku.jpg'
const web = 'https://niku.saltyaom.com'

const DefaultOpenGraph = () => (
    <Head>
        <meta name="title" content={title} />
        <meta name="description" content={description} />

        <meta property="og:title" content={title} />
        <meta property="og:image" content={`${web}${image}`} />
        <meta property="og:image:alt" content={title} />

        <meta name="twitter:card" content="description_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${web}${image}`} />

        <link rel="canonical" href={web} />

        <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⾁</text></svg>"
        />
    </Head>
)

export default DefaultOpenGraph