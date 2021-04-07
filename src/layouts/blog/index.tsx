import tw from '@tailwind'

import { BlogNavbar, BlogOpenGraph } from '@components/module/blog'

import { BlogLayoutComponent } from './types'

const BlogLayout: BlogLayoutComponent = ({ children, title }) => (
    <>
        <BlogOpenGraph title={title} />
        <BlogNavbar />
        <main
            className={tw`flex flex-col w-full max-w-[720px] mx-auto px-6 pt-[76px] pb-6`}
        >
            {children}
        </main>
    </>
)

export default BlogLayout
