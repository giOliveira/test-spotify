import { FETCH_ARTISTS_PENDING, FETCH_ARTISTS_SUCCESS, FETCH_ARTISTS_ERROR } from "../constants/actionTypes";

const initialState = {
    pending: false,
    artists: [],
    error: null
}

export default function artistsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ARTISTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_ARTISTS_SUCCESS:
            return {
                ...state,
                pending: false,
                artists: action.artists
            }
        case FETCH_ARTISTS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getArtists = state => state.artists;
export const getArtistsPending = state => state.pending;
export const getArtistsError = state => state.error;