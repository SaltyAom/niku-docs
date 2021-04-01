import Link from 'next/link'

import tw from '@tailwind'

import { Code } from '@components/atom'

const LandingHeader = () => (
    <header
        className={tw`flex flex-row justify-between items-center w-full max-w-[868px] max-h-[1366px] h-[100vh] mx-auto px-12 md:px-6`}
    >
        <section className={tw`flex flex-col justify-center`}>
            <h1 className={tw`m-0 text-7xl font-normal text-gray-900 dark:text-gray-100`}>Niku</h1>
            <p
                className={tw`text-2xl text-gray-500 dark:text-gray-400 font-light max-w-sm m-0 mt-4`}
            >
                Effortless property builder for composing maintainable Flutter
                UI
            </p>
            <div className={tw`flex flex-col md:flex-row mt-6`}>
                <Link href="/docs/[...docs]" as="/docs/introduction">
                    <a
                        className={tw`inline-block w-max bg-primary px-8 py-3 mb-2 text-2xl rounded-lg text-white cursor-pointer mr-0 sm:mr-2 no-underline`}
                    >
                        Get started
                    </a>
                </Link>
                <Link href="/docs/[...docs]" as="/docs/overview">
                    <a
                        className={tw`inline-block w-max px-8 py-3 text-2xl rounded-lg text-primary cursor-pointer mt-4 sm:mt-0 no-underline`}
                    >
                        Documentation
                    </a>
                </Link>
            </div>
        </section>
        <Code
            className={tw`hidden md:block text-white p-4 text-2xl font-code bg-black rounded-lg`}
            style={{
                boxShadow: '0 8px 25px rgba(0,0,0,.375)'
            }}
        >
            {`Text("Property Styling")
  .asNiku()
  ..fontSize(24)
  ..color(Colors.blue)
  ..mx(8)`}
        </Code>
    </header>
)

export default LandingHeader
