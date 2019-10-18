import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import AlbumCard from '../../components/albumCard';
import {isAthenticate} from '../../functions';

const styles = () => ({
    root: {
        padding: 10,
        marginTop: 30,
      },
});

class Artist extends Component {
    
    state = { expanded: false, albums: [] };
    

    componentWillMount(){
        isAthenticate(this.props);
    }

    componentDidMount() {

        fetch(`https://api.spotify.com/v1/search?q=${this.props.match.params.name}&type=album`, { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Bearer '+localStorage.getItem('access_token')
            })
          })
        .then(res => res.json())
        .then((data) => {
          this.setState({ albums: data.albums.items })
        })
        .catch(console.log)
       
    }

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {

        const {classes} = this.props;
        

        return (
            <Fragment>
                <div className={classes.root}>
                    <Grid container>
                        {this.state.albums.map((album) => (
                            <AlbumCard 
                                name={album.name}
                                img={album.images[0].url}
                                artist={album.artists}
                                id={album.id} />
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