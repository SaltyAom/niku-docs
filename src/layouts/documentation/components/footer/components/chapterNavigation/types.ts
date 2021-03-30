import { ReactNode, FunctionComponent } from 'react'

export interface DocumentationChapterNavigationProps {
    title: string | null
    icon: ReactNode
    before?: boolean
}

export type DocumentationChapterNavigationComponent = FunctionComponent<DocumentationChapterNavigationProps>
