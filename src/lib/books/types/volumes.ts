import { ListResponse } from "./response"

export interface VolumeIndustryIdentifier {
    type: string
    identifier: string
}

export interface VolumeDimensions {
    height: string
    width: string
    thickness: string
}

export interface VolumeImageLinks {
    smallThumbnail: string
    thumbnail: string
    small: string
    medium: string
    large: string
    extraLarge: string
}

export interface PriceInfo {
    amount: number
    currencyCode: string
}

export interface EpubPdfInfo {
    isAvailable: boolean
    downloadLink: string
    acsTokenLink: string
}

export interface DownloadAccess {
    kind: 'books#downloadAccessRestriction'
    volumeId: string
    restricted: boolean
    deviceAllowed: boolean
    justAcquired: boolean
    maxDownloadDevices: number
    downloadsAcquired: number
    nonce: string
    source: string
    reasonCode: string
    message: string
    signature: string
}

export interface UserInfo {
    isPurchased: boolean
    isPreordered: boolean
    updated: Date
}

export interface SaleInfo {
    country: string
    saleability: string
    onSaleDate: Date
    isEbook: boolean
    listPrice: PriceInfo
    retailPrice: PriceInfo
    buyLink: string
}

export interface AccessInfo {
    country: string
    viewability: string
    embeddable: boolean
    publicDomain: boolean
    textToSpeechPermission: string
    epub: EpubPdfInfo
    pdf: EpubPdfInfo
    webReaderLink: string
    accessViewStatus: string
    downloadAccess: DownloadAccess
}

export interface SearchInfo {
    textSnippet: string
}

export interface VolumeInfo {
    title: string
    subtitle: string
    authors: string[]
    publisher: string
    publishedDate: string
    description: string
    industryIdentifiers: VolumeIndustryIdentifier[]
    pageCount: number
    dimensions: VolumeDimensions
    printType: string
    mainCategory: string
    categories: string[]
    averageRating: number
    ratingsCount: number
    contentVersion: string
    imageLinks: VolumeImageLinks
    language: string
    previewLink: string
    infoLink: string
    canonicalVolumeLink: string
}

export interface VolumeKind {
    kind: 'books#volume'
    id: string
    etag: string
    selfLink: string
    volumeInfo: VolumeInfo
    userInfo: UserInfo
    saleInfo: SaleInfo
    accessInfo: AccessInfo
    searchInfo: SearchInfo
}

export type VolumeListKind = ListResponse<VolumeKind>
