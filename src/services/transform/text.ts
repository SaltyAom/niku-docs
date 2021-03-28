export const transformTitleToId = (title: string) =>
    title.replace(':', '').replace(/ /, '-').toLowerCase()
