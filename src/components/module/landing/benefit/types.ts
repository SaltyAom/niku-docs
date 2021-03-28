import { FunctionComponent } from "react"

import { LandingSectionProps } from "../section/types"

export interface BenefitSectionProps extends LandingSectionProps {
    title: string
    details: string[]
    code: string
}

export type BenefitSectionComponent = FunctionComponent<BenefitSectionProps>