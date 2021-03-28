import tw from '@tailwind'

import { FeaturedCardComponent } from './types'

const FeaturedCard: FeaturedCardComponent = ({ title, icon: Icon }) => (
    <div className={tw`aspect-w-1 aspect-h-1`}>
        <article className={tw`flex flex-col justify-center items-center p-4 bg-gray-50 rounded-lg`}>
            <Icon className={tw`mt-3`} style={{
                stroke: '#007aff',
                width: 48,
                height: 48
            }} />
            <h3 className={tw`text-primary text-2xl font-normal m-0 mt-3`}>{title}</h3>
        </article>
    </div>
)

export default FeaturedCard
