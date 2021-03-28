import { FunctionComponent } from "react"

export interface DocumentationNavigation {
    previous: string
    current: string
    next: string
}

export interface DocumentationLayoutProps {
    contents?: string[]
    navigation: DocumentationNavigation
}

export type DocumentationLayoutComponent = FunctionComponent<DocumentationLayoutProps>