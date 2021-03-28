import tw from '@tailwind'

import { LandingSectionComponent } from './types'

const LandingSection: LandingSectionComponent = ({ title, details }) => (
    <section
        className={tw`flex flex-col max-w-[826px] px-8 sm:px-8 mx-auto my-12`}
    >
        <h2
            className={tw`m-0 text-5xl sm:text-6xl text-gray-900 dark:text-gray-100 font-normal mb-4`}
        >
            {title}
        </h2>
        {details.map((detail, index) => (
            <p
                className={tw`text-gray-700 dark:text-gray-400 text-2xl mb-1`}
                // eslint-disable-next-line react/no-array-index-key
                key={index}
            >
                {detail}
            </p>
        ))}
    </section>
)

export default LandingSection
