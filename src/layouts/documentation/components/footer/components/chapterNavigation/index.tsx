import tw from '@tailwind'

import Link from 'next/link'

import { transformTitleToId } from '@services/transform'

import { DocumentationChapterNavigationComponent } from './types'

const ChapterNavigation: DocumentationChapterNavigationComponent = ({
    title,
    icon,
    before = false
}) =>
    title ? (
        <Link href="/docs/[...docs]" as={`/docs/${transformTitleToId(title)}`}>
            <a
                className={tw`flex flex-row items-center no-underline text-gray-400 text-lg font-light`}
            >
                {before && icon}
                {title}
                {!before && icon}
            </a>
        </Link>
    ) : (
        <div />
    )

export default ChapterNavigation
