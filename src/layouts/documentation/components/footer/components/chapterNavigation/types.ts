import { ReactNode, FunctionComponent } from 'react'

export interface DocumentationChapterNavigationProps {
    title: string | null
    icon: ReactNode
}

export type DocumentationChapterNavigationComponent = FunctionComponent<DocumentationChapterNavigationProps>
