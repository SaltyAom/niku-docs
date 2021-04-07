import { useReducer } from 'react'

import Head from 'next/head'

import tw from '@tailwind'

import { DefaultOpenGraph } from '@components/atom'

import {
    DocumentationContents,
    DocumentationNavbar,
    DocumentationNavigation,
    DocumentationFooter
} from './components'

import { DocumentationLayoutComponent } from './types'

const DocumentationLayout: DocumentationLayoutComponent = ({
    children,
    contents = [],
    navigation: chapter
}) => {
    let [showNavbar, toggleNavbar] = useReducer((state) => !state, false)

    let closeDialog = () => {
        if (showNavbar) toggleNavbar()
    }

    return (
        <>
            <Head>
                <title>{chapter.current} - Niku</title>
            </Head>
            <DefaultOpenGraph />
            <DocumentationNavbar
                showNavbar={showNavbar}
                toggleNavbar={toggleNavbar}
            />
            <main
                className={tw`flex flex-row w-full max-w-[1120px] mx-auto px-0 sm:px-6 pt-[76px] pb-6`}
            >
                <DocumentationNavigation
                    showNavbar={showNavbar}
                    closeDialog={closeDialog}
                />
                <article
                    className={tw`flex flex-col max-w-[630px] md:max-w[700px] xl:max-w-[720px] w-full mx-auto px-6 lg:px-10`}
                >
                    {children}
                    <DocumentationFooter chapter={chapter} />
                </article>
                <DocumentationContents contents={contents} />
            </main>
        </>
    )
}

export default DocumentationLayout
