import { libConfig } from "./config"
import {
    VolumesGetOptions,
    VolumesListOptions,
    BookshelvesGetOptions,
    BookshelvesListOptions,
    BookshelvesListVolumesOptions,
    BookshelvesAddOrRemoveVolumeOptions,
    VolumeKind,
    BookshelfKind,
    BookshelfListKind,
    VolumeListKind
} from "./types"

export enum API_TYPE {
    VOLUMES_GET,
    VOLUMES_LIST,
    BOOKSHELVES_GET,
    BOOKSHELVES_LIST,
    BOOKSHELVES_LIST_VOLUMES,
    BOOKSHELVES_INSERT_VOLUME,
    BOOKSHELVES_DELETE_VOLUME,
    BOOKSHELVES_CLEAR_VOLUMES,
}

type OptionsForType = {
    [API_TYPE.VOLUMES_GET]: VolumesGetOptions
    [API_TYPE.VOLUMES_LIST]: VolumesListOptions
    [API_TYPE.BOOKSHELVES_GET]: BookshelvesGetOptions
    [API_TYPE.BOOKSHELVES_LIST]: BookshelvesListOptions
    [API_TYPE.BOOKSHELVES_LIST_VOLUMES]: BookshelvesListVolumesOptions
    [API_TYPE.BOOKSHELVES_INSERT_VOLUME]: BookshelvesAddOrRemoveVolumeOptions
    [API_TYPE.BOOKSHELVES_DELETE_VOLUME]: BookshelvesAddOrRemoveVolumeOptions
    [API_TYPE.BOOKSHELVES_CLEAR_VOLUMES]: BookshelvesGetOptions
}
type ResponseForType = {
    [API_TYPE.VOLUMES_GET]: VolumeKind
    [API_TYPE.VOLUMES_LIST]: VolumeListKind
    [API_TYPE.BOOKSHELVES_GET]: BookshelfKind
    [API_TYPE.BOOKSHELVES_LIST]: BookshelfListKind
    [API_TYPE.BOOKSHELVES_LIST_VOLUMES]: VolumeListKind
    [API_TYPE.BOOKSHELVES_INSERT_VOLUME]: undefined
    [API_TYPE.BOOKSHELVES_DELETE_VOLUME]: undefined
    [API_TYPE.BOOKSHELVES_CLEAR_VOLUMES]: undefined
}

const apiUrl = libConfig.books.baseUrl

const getBookShelvesResourcePoint = (userId?: string) => userId ? `users/${userId}` : 'myLibrary'
const getQueryString = (queryParams?: any) => new URLSearchParams(queryParams).toString()


const getUrlOption = (type: API_TYPE, _options: OptionsForType[API_TYPE]): {
    url: string,
    method: "GET" | "POST" | "PUT" | "DELETE"
} => {
    switch (type) {
        case API_TYPE.VOLUMES_GET: {
            const { id, ...queryParams } = _options as OptionsForType[API_TYPE.VOLUMES_GET]
            return {
                url: `${apiUrl}/volumes/${id}?${getQueryString(queryParams)}`,
                method: "GET"
            }
        }
        case API_TYPE.VOLUMES_LIST: {
            const options = _options as OptionsForType[API_TYPE.VOLUMES_LIST]
            return {
                url: `${apiUrl}/volumes?${getQueryString(options)}`,
                method: "GET"
            }
        }
        case API_TYPE.BOOKSHELVES_GET: {
            const { id, userId } = _options as OptionsForType[API_TYPE.BOOKSHELVES_GET]
            return {
                url: `${apiUrl}/${getBookShelvesResourcePoint(userId)}/bookshelves/${id}`,
                method: "GET"
            }
        }
        case API_TYPE.BOOKSHELVES_LIST: {
            const { userId, ...queryParams } = _options as OptionsForType[API_TYPE.BOOKSHELVES_LIST]
            return {
                url: `${apiUrl}/${getBookShelvesResourcePoint(userId)}/bookshelves?${getQueryString(queryParams)}`,
                method: "GET"
            }
        }
        case API_TYPE.BOOKSHELVES_LIST_VOLUMES: {
            const { userId, id, ...queryParams } = _options as OptionsForType[API_TYPE.BOOKSHELVES_LIST_VOLUMES]
            return {
                url: `${apiUrl}/${getBookShelvesResourcePoint(userId)}/bookshelves/${id}/volumes?${getQueryString(queryParams)}`,
                method: "GET"
            }
        }
        case API_TYPE.BOOKSHELVES_INSERT_VOLUME: {
            const { userId, id, volumeId } = _options as OptionsForType[API_TYPE.BOOKSHELVES_INSERT_VOLUME]
            return {
                url: `${apiUrl}/${getBookShelvesResourcePoint(userId)}/bookshelves/${id}/volumes/addVolume?volumeId=${volumeId}`,
                method: "POST"
            }
        }
        case API_TYPE.BOOKSHELVES_DELETE_VOLUME: {
            const { userId, id, volumeId } = _options as OptionsForType[API_TYPE.BOOKSHELVES_DELETE_VOLUME]
            return {
                url: `${apiUrl}/${getBookShelvesResourcePoint(userId)}/bookshelves/${id}/volumes/removeVolume?volumeId=${volumeId}`,
                method: "POST"
            }
        }
        case API_TYPE.BOOKSHELVES_CLEAR_VOLUMES: {
            const { userId, id } = _options as OptionsForType[API_TYPE.BOOKSHELVES_CLEAR_VOLUMES]
            return {
                url: `${apiUrl}/${getBookShelvesResourcePoint(userId)}/bookshelves/${id}/volumes/clearVolumes`,
                method: "POST"
            }
        }
        default:
            throw new Error("Unsupported API type")
    }
}

export const booksFetcher = async <T extends API_TYPE>(type: T, options: OptionsForType[T]): Promise<ResponseForType[T]> => {
    const urlOption = getUrlOption(type, options)
    const response = await fetch(urlOption.url, {
        method: urlOption.method,
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const jsonResponse = await response.json()
    if (!response.ok || jsonResponse.errors) {
        const errorMessage = jsonResponse.errors ? jsonResponse.errors.join(", ") : `HTTP error! status: ${response.status}`
        throw new Error(errorMessage)
    }

    return jsonResponse
}
