import { FunctionComponent } from "react"

import { Icon } from 'react-feather'

export interface FeaturedCardProps {
    title: string
    icon: Icon
}

export type FeaturedCardComponent = FunctionComponent<FeaturedCardProps>
