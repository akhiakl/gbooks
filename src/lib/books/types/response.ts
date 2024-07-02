interface ResponseKind {
    kind: 'books#volume' | 'books#bookshelf'
}

export interface ListResponse<T extends ResponseKind> {
    kind: T['kind'],
    totalItems: number,
    items: T[]
}