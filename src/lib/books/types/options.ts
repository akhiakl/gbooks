import { GetVolumeParams, ListParams, ListVolumeParams, SearchParams } from "./params";

export type GetOptions = {
    id: string
}

export type UserOptions = {
    userId?: string;
}

export type VolumesGetOptions = GetVolumeParams & GetOptions

export type VolumesListOptions = SearchParams

export type BookshelvesGetOptions = GetOptions & UserOptions

export type BookshelvesListOptions = ListParams & UserOptions

export type BookshelvesListVolumesOptions = ListVolumeParams & BookshelvesGetOptions

export type BookshelvesAddOrRemoveVolumeOptions = BookshelvesGetOptions & {
    volumeId: string;
}