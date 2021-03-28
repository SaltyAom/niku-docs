import { FunctionComponent, ReactNode } from "react"

export interface CodeProps {
    children: ReactNode
    className?: string
    language?: string
    style?: Record<string, string>
}

export type CodeComponent = FunctionComponent<CodeProps>
