import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

import AlbumCard from '../../components/albumCard';
import {isAthenticate, newAuth} from '../../functions';
import {fetchAlbumsAction} from '../../api';
import {getAlbums, getAlbumsPending, getAlbumsError} from '../../reducers/albums';

const styles = () => ({
    root: {
        padding: 10,
        marginTop: 30,
      },
});

class Album extends Component {

    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount(){
        isAthenticate(this.props);
    }

    componentDidMount(){
        const {fetchAlbums} = this.props;
        fetchAlbums(this.props.match.params.name);
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        return true;
    }

    isFavorite = (id) => {
        const items = localStorage.getItem('favorites');
        if(items && items.indexOf(id) >= 0){
            return true
        }else{
            return false
        }
    };

    render() {

        const {albums, error, pending, classes} = this.props;
        

        return (
            <Fragment>
                <div className={classes.root}>

                {error && <span>{error}</span>}

                    <Grid container>
                        {albums.map((album) => (
                            <AlbumCard 
                                name={album.name}
                                img={album.images[0].url}
                                artist={album.artists}
                                id={album.id} 
                                favorite={this.isFavorite(album.id)}/>
                        ))}
                    </Grid>
                </div>
            </Fragment>
        )
    }
}


const mapStateToProps = state => ({
    error: getAlbumsError(state),
    albums: getAlbums(state),
    pending: getAlbumsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchAlbums: value => fetchAlbumsAction(value)
}, dispatch)

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )((withStyles(styles)(withRouter(Album))));