import { FunctionComponent } from "react"

export interface DocumentationContentsProps {
    contents: string[]
}

export type DocumentationContentsComponent = FunctionComponent<DocumentationContentsProps>
