import tw from '@tailwind'

import { transformTitleToId } from '@services/transform'

import { DocumentationContentsComponent } from './types'

import styles from './documentation.module.sass'

const Contents: DocumentationContentsComponent = ({ contents }) => (
    <aside
        className={`${tw('hidden md:block relative w-[220px]')} ${
            styles.aside
        }`}
    >
        {contents.length ? (
            <ul
                className={tw`fixed top-[76px] bottom-0 list-none flex flex-col w-[220px] overflow-x-auto overflow-y-auto mt-0 pl-4`}
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
)

export default Contents