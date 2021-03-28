import Head from 'next/head'

import Image from 'next/image'
import Link from 'next/link'

import tw from '@tailwind'

import { GitHub } from 'react-feather'

import {
    LandingHeader,
    BenefitSection,
    LandingSection,
    FeatureComponent
} from '@components/module/landing'

import { BenefitSectionProps } from '@components/module/landing/benefit/types'

const benefits: BenefitSectionProps[] = [
    {
        title: 'Easy to maintain',
        details: [
            `While it's easy to create UI in Flutter, but once
            the app get complex, it's really hard to maintain.`,
            `Niku reduce Nested Hell, transforming them into
            SwiftUI's modifier like syntax. And gain better
            developer experience`
        ],
        code: `TextButton(
  child: Text("Styling Field")
  onPressed: callback,
).asNiku()
  ..onPressed(log)
  ..fontSize(24)
  ..splash(Colors.blue)
  ..rounded(8)`
    },
    {
        title: 'Reusable style',
        details: [
            `With Niku, developer can defined style and reuse styling
            anywhere in the codebase.`,
            `Reusable style can also add compose from function like
or adding more styling as component need.`
        ],
        code: `final textField = NikuTextField()
  ..color(Colors.blue);
  ..prefixIcon(
    Icon(Icons.edit)
  );

return NikuTextField().
  .apply(textField)
  ..label("Name");`
    },
    {
        title: 'Complex Styling',
        details: [
            `Niku provided a lot of pre-defined property to quickly
        develop Flutter UI.`,
            `But you can go beyond that with custom property builder
        or using custom Widget with Niku.`
        ],
        code: `Niku()
  ..builder((child) {
    return CustomCard(
      child: child,
    );
  )
  ..on(pressed: animate)
  ..animated(
    controller,
    (child) => Niku()..bg(value);
  )
});`
    }
]

const Landing = () => (
    <>
        <Head>
            <title>Niku</title>
        </Head>
        <main className={tw`flex flex-col`}>
            <LandingHeader />
            <LandingSection
                title="Declarative"
                details={[
                    `Compose Flutter UI in a more declarative way, easier to
                maintain, and better developer experience.`,
                    `Niku helps developer to write less Flutter code, removing
                "Nested Hell" while maintaining declarative UI at
                the same time.`
                ]}
            />
            <section className={tw`block mx-auto w-full max-w-[780px] my-4`}>
                <Image
                    src="/images/drake.jpg"
                    alt="Korone's drake format"
                    width={780}
                    height={780}
                />
            </section>
            <section className={tw`flex flex-col my-4`}>
                {benefits.map((benefit) => (
                    <BenefitSection {...benefit} key={benefit.title} />
                ))}
            </section>
            <LandingSection
                title="Predefined Component"
                details={[
                    `Niku covered complex widget and prefined complex styling into simple property for each widget.`,
                    `Once you're done with unique property builder, Niku also allows developers to composing the parent at the same time.`,
                    `This helps reduce the process styling even the Widget is nested with multiple parent or have complex styling.`
                ]}
            />
            <FeatureComponent />
            <LandingSection
                title="Loved by developers"
                details={[
                    `Inspired by SwiftUI, Tailwind CSS.`,
                    `If have been Apple developer or web developer before, chances are, you'll be very familiar with Niku and already known half of Niku and ready to pickup for using in real project.`,
                    `Niku bring best of both world, packed into familiar API and shipped directly into Flutter while being idoimatic to Dart.`,
                    `You will be surprised at how easy it is to get started.`
                ]}
            />
            <div className={tw`flex flex-col sm:flex-row mb-12 mx-auto w-max`}>
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
        </main>
        <footer className={tw`flex flex-col items-center py-8 w-full`}>
            <h4 className={tw`text-gray-400 font-normal`}>
                &copy; SaltyAom 2021
            </h4>
            <a
                href="https://github.com/SaltyAom/niku"
                target="_blank"
                rel="noreferrer"
            >
                <GitHub color="#007AFF" />
            </a>
        </footer>
    </>
)

export default Landing
