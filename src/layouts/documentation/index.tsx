/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import { useReducer } from 'react'

import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

import tw from '@tailwind'

import { ArrowLeft, ArrowRight, GitHub, Menu, X } from 'react-feather'

import { navigations } from '@services/constants'
import { transformTitleToId } from '@services/transform'

import { DocumentationLayoutComponent } from './types'

import styles from './documentation.module.sass'

const DocumentationLayout: DocumentationLayoutComponent = ({
    children,
    contents = [],
    navigation: chapter
}) => {
    let router = useRouter()

    let [showNavbar, toggleNavbar] = useReducer((state) => !state, false)

    let closeDialog = () => {
        if (showNavbar) toggleNavbar()
    }

    return (
        <>
            <Head>
                <title>{chapter.current} - Niku</title>
            </Head>
            <nav
                className={tw`fixed z-50 flex flex-row justify-center items-center w-full h-[64px] bg-system dark:bg-system-dark`}
            >
                <div
                    className={tw`flex flex-row items-center w-full max-w-[1120px] pr-6 lg:px-6`}
                >
                    <button
                        className={tw`block lg:hidden appearance-none text-gray-400 border-0 bg-transparent cursor-pointer`}
                        onClick={toggleNavbar}
                        type="button"
                        style={{
                            width: 64,
                            height: 64
                        }}
                    >
                        {showNavbar ? <X /> : <Menu />}
                    </button>
                    <Link href="/">
                        <a
                            role="heading"
                            aria-level={1}
                            className={tw`text-2xl text-gray-800 dark:text-gray-100 font-medium m-0 no-underline`}
                        >
                            Niku
                        </a>
                    </Link>
                    <section className={tw`flex flex-row flex-1`} />
                    <section className={tw`flex flex-row`}>
                        <a
                            className={tw`text-gray-400 no-underline`}
                            href="https://github.com/SaltyAom/niku"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <GitHub />
                        </a>
                    </section>
                </div>
            </nav>
            <main
                className={tw`flex flex-row w-full max-w-[1120px] mx-auto px-0 sm:px-6 pt-[76px] pb-6`}
            >
                <aside
                    className={tw`hidden pl-6 lg:pl-0 lg:block relative lg:w-[180px]`}
                    key={showNavbar ? 1 : 0}
                    style={{
                        display: showNavbar ? 'block' : ''
                    }}
                >
                    <div
                        className={tw`fixed z-40 top-[64px] bottom-0 flex flex-col w-full lg:w-[200px] transform -translate-x-3 overflow-y-scroll pl-3 bg-system dark:bg-system-dark`}
                        style={{
                            padding: 76 - 64 + 'px'
                        }}
                    >
                        {navigations.map((navigation) => (
                            <>
                                <h1
                                    key={navigation.heading}
                                    className={tw`text-md lg:text-sm text-gray-600 dark:text-gray-500 font-light mt-0 mb-2`}
                                >
                                    {navigation.heading}
                                </h1>
                                <section
                                    className={tw`flex flex-col mb-8 transform -translate-x-3`}
                                >
                                    {navigation.contents.map((content) => {
                                        const link =
                                            '/docs/' +
                                            content
                                                .toLowerCase()
                                                .replace(/ /, '-')
                                        const isActive = link === router.asPath

                                        return (
                                            <Link
                                                as={link}
                                                href="/docs/[...docs]"
                                            >
                                                <a
                                                    className={tw(
                                                        `text-md w-full px-3 py-2 mb-1 text-gray-400 dark:text-gray-300 no-underline rounded hover:text-blue-400 dark:hover:text-blue-500 ${
                                                            isActive
                                                                ? 'bg-blue-50 dark:bg-blue-700 text-blue-400 dark:text-white dark:hover:text-white'
                                                                : ''
                                                        }`
                                                    )}
                                                    onClick={closeDialog}
                                                >
                                                    {content}
                                                </a>
                                            </Link>
                                        )
                                    })}
                                </section>
                            </>
                        ))}
                    </div>
                </aside>
                <article
                    className={tw`flex flex-col max-w-[630px] md:max-w[700px] xl:max-w-[720px] w-full mx-auto px-6 lg:px-10`}
                >
                    {children}
                    <hr
                        className={tw`w-full opacity-25 border-gray-50 mt-8 mb-4`}
                    />
                    <footer className={tw`flex flex-row justify-between mb-12`}>
                        {chapter.previous ? (
                            <Link
                                href="/docs/[...docs]"
                                as={`/docs/${transformTitleToId(
                                    chapter.previous
                                )}`}
                            >
                                <a
                                    className={tw`flex flex-row items-center no-underline text-gray-400 text-lg font-light`}
                                >
                                    <ArrowLeft
                                        className={tw`mr-1`}
                                        width={21}
                                        height={21}
                                    />
                                    {chapter.previous}
                                </a>
                            </Link>
                        ) : (
                            <div />
                        )}
                        {chapter.next && (
                            <Link
                                href="/docs/[...docs]"
                                as={`/docs/${transformTitleToId(chapter.next)}`}
                            >
                                <a
                                    className={tw`flex flex-row items-center no-underline text-gray-400 text-lg font-light`}
                                >
                                    {chapter.next}
                                    <ArrowRight
                                        className={tw`ml-1`}
                                        width={21}
                                        height={21}
                                    />
                                </a>
                            </Link>
                        )}
                    </footer>
                </article>
                <aside
                    className={`${tw('hidden md:block relative w-[220px]')} ${
                        styles.aside
                    }`}
                >
                    {contents.length ? (
                        <ul
                            className={tw`fixed top-[76px] bottom-0 list-none flex flex-col w-[220px] overflow-y-scroll mt-0 pl-4`}
                        >
                            <h3
                                className={tw`text-md font-light text-gray-500 dark:text-gray-300 px-2 m-0 mb-4`}
                            >
                                Contents
                            </h3>

                            {contents.map((content) => (
                                <li className={tw`p-2 mb-1`}>
                                    <a
                                        className={tw`no-underline text-md text-gray-400 dark:text-gray-200 font-light hover:text-blue-400`}
                                        href={`#${transformTitleToId(content)}`}
                                    >
                                        {content}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    ) : null}
                </aside>
            </main>
        </>
    )
}

export default DocumentationLayout
