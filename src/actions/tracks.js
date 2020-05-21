import { FETCH_TRACKS_PENDING, FETCH_TRACKS_SUCCESS, FETCH_TRACKS_ERROR } from "../constants/actionTypes";

export function fetchTracksPending() {
    return {
        type: FETCH_TRACKS_PENDING
    }
}

export function fetchTracksSuccess(tracks) {
    return {
        type: FETCH_TRACKS_SUCCESS, 
        tracks: tracks
    }
}  

export function fetchTracksError(error) {
    return {
        type: FETCH_TRACKS_ERROR,
        error: error
    }
}