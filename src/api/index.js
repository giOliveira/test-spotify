import {fetchTracksPending, fetchTracksSuccess, fetchTracksError} from  '../actions/tracks'

export function fetchTracksAction(track) {
    return dispatch => {
        dispatch(fetchTracksPending());

        fetch(`https://api.spotify.com/v1/search?q=${track}&type=track`, {
            method: 'get',
            headers: new Headers({
                'Authorization': 'Bearer ' + localStorage.getItem('access_token')
            })
        })
            .then(res => res.json())
            .then((res) => {
            if(res.error) {
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
