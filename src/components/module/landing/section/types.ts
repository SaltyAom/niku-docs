import { FunctionComponent } from "react"

export interface LandingSectionProps {
    title: string
    details: string[]
}

export type LandingSectionComponent = FunctionComponent<LandingSectionProps>
