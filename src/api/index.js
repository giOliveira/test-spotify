import {fetchTracksPending, fetchTracksSuccess, fetchTracksError} from  '../actions/tracks'
import {fetchAlbumsPending, fetchAlbumsSuccess, fetchAlbumsError} from  '../actions/albums'
import {newAuth} from '../functions'

const ENDPOINT = 'https://api.spotify.com/v1/';

export function fetchTracksAction(track) {
    return dispatch => {
        dispatch(fetchTracksPending());

        fetch(`${ENDPOINT}search?q=${track}&type=track`, {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            })
        })
            .then(res => res.json())
            .then((res) => {
            if(res.error) {
                newAuth();
                throw(res.error);
            }
            dispatch(fetchTracksSuccess(res.tracks.items));
            return res.tracks.items;
        })
        .catch(error => {
            dispatch(fetchTracksError(error));
        })
    }
}

export function fetchAlbumsAction(album) {
    return dispatch => {
        dispatch(fetchAlbumsPending());

        fetch(`${ENDPOINT}search?q=${album}&type=album`, {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            })
        })
            .then(res => res.json())
            .then((res) => {
            if(res.error) {
                newAuth();
                throw(res.error);
            }
            dispatch(fetchAlbumsSuccess(res.albums.items));
            return res.albums.items;
        })
        .catch(error => {
            dispatch(fetchAlbumsError(error));
        })
    }
}