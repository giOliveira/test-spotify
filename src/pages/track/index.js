import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import TrackCard from '../../components/trackCard';
import {isAthenticate, newAuth} from '../../functions';

const styles = () => ({
    root: {
        padding: 10,
        marginTop: 30,
      },
});

class Artist extends Component {
    
    state = { expanded: false, tracks: []};

    componentWillMount(){
        isAthenticate(this.props);
    }

    componentDidMount() {

        fetch(`https://api.spotify.com/v1/search?q=${this.props.match.params.name}&type=track`, { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Bearer '+localStorage.getItem('access_token')
            })
          })
        .then(res => res.json())
        .then((data) => {
            if(data.error){
                newAuth()
                isAthenticate(this.props);
            }else{
                this.setState({ tracks: data.tracks.items })
            }
        })
        .catch(console.log)
       
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

        const {classes} = this.props;
        

        return (
            <Fragment>
                <div className={classes.root}>
                    <Grid container>
                        {this.state.tracks.map((track) => (
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

Artist.propTypes = {
    classes: PropTypes.object.isRequired
};

export default (withStyles(styles)(withRouter(Artist)));