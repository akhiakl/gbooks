
export type Download = 'ePub'
export type Projection = 'full' | 'lite'
export type OrderBy = 'relevance' | 'newest'
export type PrintType = 'all' | 'books' | 'magazines'
export type LibraryRestriction = 'my-library' | 'no-restrict'
export type Filter =
    | "partial"
    | "full"
    | "free-ebooks"
    | "paid-ebooks"
    | "ebooks"
export type Locale = string  // ISO-639-1 two-letter code, like "en", "fr", etc.
export type ProjectionParams = {
    projection?: Projection
}
export type ListParams = {
    startIndex?: number
    maxResults?: number  // 1 to 40
}
export type VolumeIdParams = {
    volumeId?: string
}

export type ListVolumeParams = ProjectionParams & ListParams & {
    showPreorders?: boolean
}

export type GetVolumeParams = ProjectionParams

export type SearchParams = ListVolumeParams & {
    q: string
    download?: Download
    filter?: Filter
    langRestrict?: Locale
    libraryRestrict?: LibraryRestriction
    orderBy?: OrderBy
    printType?: PrintType
}

