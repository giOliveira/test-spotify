import { FETCH_ALBUMS_PENDING, FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_ERROR } from "../constants/actionTypes";

const initialState = {
    pending: false,
    albums: [],
    error: null
}

export default function albumsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_ALBUMS_PENDING:
            return {
                ...state,
                pending: true
            }
        case FETCH_ALBUMS_SUCCESS:
            return {
                ...state,
                pending: false,
                albums: action.albums
            }
        case FETCH_ALBUMS_ERROR:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}

export const getAlbums = state => state.albums;
export const getAlbumsPending = state => state.pending;
export const getAlbumsError = state => state.error;