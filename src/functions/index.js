export const authenticate = (location) => {
    if(location.hash.includes('access_token')){
        const token = location.hash.split('=')[1].split('&')[0];
        localStorage.setItem('access_token', token);
    }
}

export const redirect = () => {
    if(!localStorage.getItem('access_token')){
        window.location.href = 'https://accounts.spotify.com/authorize?client_id=7604f3f69c5640ef81539d1e4ec41ed4&redirect_uri=http://localhost:3000/&response_type=token'
    }
}

export const isAthenticate = (props) => {
    if (!localStorage.getItem('access_token')) {
      props.history.push("/");
    }
}

export const newAuth = () => {
    localStorage.removeItem('access_token');
}

export const favoriteItem = (id) => {
    if(localStorage.getItem('favorites')){
        if(localStorage.getItem('favorites').indexOf(id) === -1){
            const favs = localStorage.getItem('favorites') + ',' + id;
            localStorage.setItem('favorites', favs)
        }
    }else{
        localStorage.setItem('favorites', id)
    }
    
}