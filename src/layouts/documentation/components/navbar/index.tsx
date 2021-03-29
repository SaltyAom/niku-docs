import Link from 'next/link'

import tw from '@tailwind'

import { GitHub, Menu, X } from 'react-feather'

import { DocumentationNavbarComponent } from './types'

const DocumentationNavbar: DocumentationNavbarComponent = ({
    showNavbar,
    toggleNavbar
}) => (
    <nav
        className={tw`fixed z-50 flex flex-row justify-center items-center w-full h-[64px] bg-system dark:bg-system-dark`}
    >
        <div
            className={tw`flex flex-row items-center w-full max-w-[1120px] pr-6 lg:px-6 overflow-x-hidden overflow-y-auto`}
        >
            <button
                className={tw`block lg:hidden appearance-none text-gray-400 border-0 bg-transparent cursor-pointer`}
                onClick={toggleNavbar}
                type="button"
                name={showNavbar ? 'Close Navigation' : 'Show Navigation'}
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
                    aria-label="Niku on Github"
                    href="https://github.com/SaltyAom/niku"
                    target="_blank"
                    rel="noreferrer"
                >
                    <GitHub />
                </a>
            </section>
        </div>
    </nav>
)

export default DocumentationNavbar
