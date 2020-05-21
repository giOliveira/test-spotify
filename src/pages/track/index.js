import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

import {fetchTracksAction} from '../../api'
import {getTracks, getTracksPending, getTracksError} from '../../reducers/tracks'
import {isAthenticate, newAuth} from '../../functions';

import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import TrackCard from '../../components/trackCard';


const styles = () => ({
    root: {
        padding: 10,
        marginTop: 30,
      },
});

class Track extends Component {

    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }
    
    componentWillMount() {
        isAthenticate(this.props);
    }

    componentDidMount(){
        const {fetchTracks} = this.props;
        fetchTracks(this.props.match.params.name);
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        return true;
    }

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

        const {tracks, error, pending, classes} = this.props;

        return (
            <Fragment>
                <div className={classes.root}>

                {error && <span>{error}</span>}

                    <Grid container>
                        {tracks.map((track) => (
                            <TrackCard 
                                name={track.name}
                                album={track.album.name}
                                artist={track.artists}
                                duration={track.duration_ms}
                                img={track.album.images[0].url}
                                id={track.id}
                                favorite={this.isFavorite(track.id)}
                                />
                            ))}
                    </Grid>
                </div>
            </Fragment>
        )
    }
}

const mapStateToProps = state => ({
    error: getTracksError(state),
    tracks: getTracks(state),
    pending: getTracksPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchTracks: value => fetchTracksAction(value)
}, dispatch)

export default connect(
        mapStateToProps,
        mapDispatchToProps
    )((withStyles(styles)(withRouter(Track))));