'use server'

import { API_TYPE, booksFetcher } from "~/lib/books";

export async function searchVolumes(search: string) {
    const response = await booksFetcher(API_TYPE.VOLUMES_LIST, {
        q: search
    })
    return response;
}