import { transformTitleToId } from '@services/transform'

export const navigations = [
    {
        heading: 'Getting Started',
        contents: [
            'Introduction',
            'Installation',
            'Overview',
            'Property Builder',
            'Naming convention'
        ]
    },
    {
        heading: 'Core Concept',
        contents: [
            'Style Builder',
            'Parent Builder',
            'Reusable Style',
            'Custom Builder'
        ]
    },
    {
        heading: 'Predefined Widget',
        contents: [
            'Niku',
            'Text',
            'Column',
            'Row',
            'Stack',
            'Wrap',
            'Button',
            'Icon Button',
            'TextField'
        ]
    },
    {
        heading: 'Extension',
        contents: ['Niku Extension', 'Widget Extension']
    }
]

export const navigationList = navigations.flatMap(({ contents }) =>
    contents.map((content) => content)
)
export const navigationIdList = navigationList.map(transformTitleToId)
