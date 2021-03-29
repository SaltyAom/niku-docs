import { FunctionComponent } from 'react'

export interface DocumentationNavbarProps {
    showNavbar: boolean
    toggleNavbar: () => void
}

export type DocumentationNavbarComponent = FunctionComponent<DocumentationNavbarProps>
