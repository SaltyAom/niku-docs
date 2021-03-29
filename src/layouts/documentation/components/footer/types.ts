import { FunctionComponent } from 'react'

import { DocumentationNavigation } from '@layouts/documentation/types'

export interface DocumentationFooterProps {
    chapter: DocumentationNavigation
}

export type DocumentationFooterComponent = FunctionComponent<DocumentationFooterProps>
