import { ListResponse } from './response';

export interface BookshelfKind {
    kind: 'books#bookshelf',
    id: number,
    selfLink: string,
    title: string,
    description: string,
    access: string,
    updated: Date,
    created: Date,
    volumeCount: number,
    volumesLastUpdated: Date
}

export type BookshelfListKind = ListResponse<BookshelfKind>
