import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import ArtistCard from '../../components/artistCard';
import {isAthenticate} from '../../functions';

const styles = () => ({
    root: {
        flexGrow: 1,
        padding: 10,
        marginTop: 30,
      },
});

class Artist extends Component {
    
    state = { expanded: false, artists: [] };
    

    componentWillMount(){
        isAthenticate(this.props);
    }

    componentDidMount() {

        fetch(`https://api.spotify.com/v1/search?q=${this.props.match.params.name}&type=artist`, { 
            method: 'get', 
            headers: new Headers({
              'Authorization': 'Bearer '+localStorage.getItem('access_token')
            })
          })
        .then(res => res.json())
        .then((data) => {
          this.setState({ artists: data.artists.items })
          console.log(data.artists.items[0].images[0].url)
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
                    {this.state.artists.map((artist) => (
                            <ArtistCard 
                                name={artist.name}
                                img={artist.images[0]}
                                desc={artist.genres}
                                list="teste" />
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