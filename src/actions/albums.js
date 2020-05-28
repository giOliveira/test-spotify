import { FETCH_ALBUMS_PENDING, FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_ERROR } from "../constants/actionTypes";

export function fetchAlbumsPending() {
    return {
        type: FETCH_ALBUMS_PENDING
    }
}

export function fetchAlbumsSuccess(albums) {
    return {
        type: FETCH_ALBUMS_SUCCESS, 
        albums: albums
    }
}  

export function fetchAlbumsError(error) {
    return {
        type: FETCH_ALBUMS_ERROR,
        error: error
    }
}