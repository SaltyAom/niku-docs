/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import tw from '@tailwind'

import Link from 'next/link'
import { useRouter } from 'next/router'

import { navigations } from '@services/constants'

import { DocumentationNavigationComponent } from './types'

const DocumentationNavigation: DocumentationNavigationComponent = ({
    showNavbar,
    closeDialog
}) => {
    let router = useRouter()

    return (
        <aside
            className={tw`hidden pl-6 lg:pl-0 lg:block relative lg:w-[180px]`}
            key={showNavbar ? 1 : 0}
            style={{
                display: showNavbar ? 'block' : ''
            }}
        >
            <div
                className={tw`fixed z-40 top-[64px] bottom-0 flex flex-col w-full lg:w-[200px] transform -translate-x-3 overflow-x-hidden overflow-y-auto pl-3 bg-system dark:bg-system-dark`}
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
                                    content.toLowerCase().replace(/ /, '-')
                                const isActive = link === router.asPath

                                return (
                                    <Link as={link} href="/docs/[...docs]">
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
    )
}

export default DocumentationNavigation
