import tw from '@tailwind'

import { Code } from '@components/atom'

import { BenefitSectionComponent } from './types'

const BenefitSection: BenefitSectionComponent = ({ title, details, code }) => (
    <section
        className={tw`flex flex-col sm:flex-row justify-around max-w-[968px] px-8 sm:px-8 mx-auto my-8 py-8`}
    >
        <section className={tw`flex flex-col justify-center pr-8 flex-1`}>
            <h2 className={tw`m-0 text-5xl sm:text-6xl font-normal mb-4`}>
                {title}
            </h2>
            {details.map((content, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <p className={tw`text-gray-700 text-2xl mb-1`} key={index}>
                    {content}
                </p>
            ))}
        </section>
        <section
            className={tw`flex flex-col flex-2 justify-center flex-1 mt-8 sm:mt-0`}
        >
            <Code
                className={tw`inline-block text-white p-4 text-xl font-code bg-black rounded-lg mx-auto`}
                style={{
                    boxShadow: '0 8px 25px rgba(0,0,0,.375)'
                }}
            >
                {code}
            </Code>
        </section>
    </section>
)

export default BenefitSection
