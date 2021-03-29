import tw from '@tailwind'

import { ArrowLeft, ArrowRight } from 'react-feather'

import { ChapterNavigation } from './components'

import { DocumentationFooterComponent } from './types'

const DocumentationFooter: DocumentationFooterComponent = ({ chapter }) => (
    <>
        <hr className={tw`w-full opacity-25 border-gray-50 mt-8 mb-4`} />

        <footer className={tw`flex flex-row justify-between mb-12`}>
            <ChapterNavigation
                title={chapter.previous}
                icon={<ArrowLeft className={tw`mr-1`} width={21} height={21} />}
            />

            <ChapterNavigation
                title={chapter.next}
                icon={
                    <ArrowRight className={tw`ml-1`} width={21} height={21} />
                }
            />
        </footer>
    </>
)

export default DocumentationFooter
