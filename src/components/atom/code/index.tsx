/* eslint-disable global-require */
import { useEffect, useMemo, useRef } from 'react'

import { CodeComponent } from './types'

const Code: CodeComponent = ({
    children,
    className = '',
    language = 'dart',
    style = {}
}) => {
    let code = useRef<HTMLElement>(null)

    let syntaxHighlight = useMemo(
        () => async (element: HTMLElement) => {
            let Prism = await require('prismjs')
            await require('prismjs/components/prism-dart')

            Prism.highlightElement(element)
        },
        []
    )

    useEffect(() => {
        if (!code.current) return

        let observerConfig = {
            threshold: 0.01
        }

        let observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && code.current) {
                    syntaxHighlight(code.current)
                    observer.disconnect()
                }
            })
        }, observerConfig)

        observer.observe(code.current)

        return () => {
            observer.disconnect()
        }
    }, [])

    return (
        <code
            className={`language-${language} ${className}`}
            ref={code}
            style={style}
        >
            {children}
        </code>
    )
}

export default Code
