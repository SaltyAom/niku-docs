import { FunctionComponent } from 'react'

export interface DocumentationNavigationProps {
    showNavbar: boolean
    closeDialog: () => void
}

export type DocumentationNavigationComponent = FunctionComponent<DocumentationNavigationProps>
