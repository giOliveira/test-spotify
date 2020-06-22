import { FETCH_ARTISTS_PENDING, FETCH_ARTISTS_SUCCESS, FETCH_ARTISTS_ERROR } from "../constants/actionTypes";

export function fetchArtistsPending() {
    return {
        type: FETCH_ARTISTS_PENDING
    }
}

export function fetchArtistsSuccess(artists) {
    return {
        type: FETCH_ARTISTS_SUCCESS, 
        artists: artists
    }
}  

export function fetchArtistsError(error) {
    return {
        type: FETCH_ARTISTS_ERROR,
        error: error
    }
}