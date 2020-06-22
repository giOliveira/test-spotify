import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';

import ArtistCard from '../../components/artistCard';
import {isAthenticate, newAuth} from '../../functions';
import {fetchArtistsAction} from '../../api';
import {getArtists, getArtistsPending, getArtistsError} from '../../reducers/artists';

const styles = () => ({
    root: {
        flexGrow: 1,
        padding: 10,
        marginTop: 30,
      },
});

class Artist extends Component {

    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount(){
        isAthenticate(this.props);
    }

    componentDidMount(){
        const {fetchArtists} = this.props;
        fetchArtists(this.props.match.params.name);
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        return true;
    }
    
    state = { expanded: false};

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    isFavorite = (id) => {
        const items = localStorage.getItem('favorites');
        if(items && items.indexOf(id) >= 0){
            return true
        }else{
            return false
        }
    };

    render() {

        const {artists, error, pending, classes} = this.props;

        return (
            <Fragment>
                <div className={classes.root}>

                {error && <span>{error}</span>}

                    <Grid container>
                    {artists.map((artist) => (
                            <ArtistCard 
                                name={artist.name}
                                img={artist.images[0]}
                                desc={artist.genres}
                                id={artist.id}
                                favorite={this.isFavorite(artist.id)} />
                        ))}
                    </Grid>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    error: getArtistsError(state),
    artists: getArtists(state),
    pending: getArtistsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchArtists: value => fetchArtistsAction(value)
}, dispatch)

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )((withStyles(styles)(withRouter(Artist))));