import { FETCH_TRACKS_PENDING, FETCH_TRACKS_SUCCESS, FETCH_TRACKS_ERROR } from "../constants/actionTypes";

const initialState = {
    pending: false,
    tracks: [],
    error: null
}

export default function tracksReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_TRACKS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_TRACKS_SUCCESS:
            return {
                ...state,
                pending: false,
                tracks: action.tracks
            }
        case FETCH_TRACKS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getTracks = state => state.tracks;
export const getTracksPending = state => state.pending;
export const getTracksError = state => state.error;