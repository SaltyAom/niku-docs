import tw from '@tailwind'

import {
    MessageSquare,
    Type,
    Square,
    Columns,
    Layers,
    Copy
} from 'react-feather'

import { FeaturedCard } from './components'

import { FeaturedCardProps } from './components/featuredCard/types'

const cards: FeaturedCardProps[] = [
    {
        title: 'TextField',
        icon: MessageSquare
    },
    {
        title: 'Text',
        icon: Type
    },
    {
        title: 'Button',
        icon: Square
    },
    {
        title: 'Column',
        icon: Columns
    },
    {
        title: 'Stack',
        icon: Layers,
    },
    {
        title: 'More',
        icon: Copy
    }
]

const FeatureComponent = () => (
    <section
        className={tw`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 grid-gap gap-6 w-full max-w-[968px] mx-auto mt-6 mb-12 px-8`}
    >
        {cards.map((card) => (
            <FeaturedCard {...card} key={card.title} />
        ))}
    </section>
)

export default FeatureComponent
