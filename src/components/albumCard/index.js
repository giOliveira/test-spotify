import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Grid} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {favoriteItem} from '../../functions'

const styles = () => ({
      container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
        marginTop: 15
      },
      card: {
        width: '90%',
        backgroundColor: '#1e1e1e',
        color: '#f2f2f2',
        padding: 10,
      },
      media: {
        paddingTop: '56.25%'
      },
      expand: {
        transform: 'rotate(0deg)',
        marginLeft: 70,
      },
      expandOpen: {
        transform: 'rotate(180deg)',
      },
      icon: {
          color: '#fff',
      },
      favorite: {
          color: 'red'
      },
      desc: {
          fontSize: 12
      }
});

class AlbumCard extends Component {
    
    state = { expanded: false, tracks: [], favorite: this.props.favorite };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    componentDidMount(){
        fetch(`https://api.spotify.com/v1/albums/${this.props.id}/tracks`, { 
            method: 'get', 
            headers: new Headers({
            'Authorization': 'Bearer '+localStorage.getItem('access_token')
            })
        })
        .then(res => res.json())
        .then((data) => {
            this.setState({ tracks: data.items })
        })
        .catch(console.log)
    }

    favorite = (id) => {
        this.setState(state => ({ favorite: !state.favorite }));
        favoriteItem(id)
    }

    render() {

        const {classes} = this.props;
        
        return (
            <Fragment>
                    <Grid item xs={12} md={4} className={classes.container}>
                        <Card className={classes.card}>
                        <CardHeader
                            title={this.props.name}
                        />
                        <CardMedia
                            className={classes.media}
                            image={this.props.img ? this.props.img : 'https://picsum.photos/id/904/200/300?grayscale'}
                            title={this.props.name}
                        />
                        <CardContent>
                            <Typography variant="body2" component="p" className={classes.desc}>
                            {this.props.artist.map((artist) => artist.name).toString()}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                        <IconButton 
                            className={this.props.favorite}
                            aria-label="add to favorites" 
                            onClick={(event) => this.favorite(this.props.id)}
                        >
                            <FavoriteIcon className={classes.icon, {
                                [classes.favorite]: this.state.favorite
                            }}/>
                        </IconButton>
                        <IconButton
                            className={classes.expand, {
                                [classes.expandOpen]: this.state.expanded
                            }}
                            onClick={this.handleExpandClick}
                            aria-expanded={this.state.expanded}
                            aria-label="show more"
                            >
                            <ExpandMoreIcon className={classes.icon}/>
                            </IconButton>
                        </CardActions>
                        <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
                            <CardContent>
                            <Typography paragraph>
                            {this.state.tracks.map((track) => (
                                <p>{track.name}</p>
                            ))}
                            </Typography>
                            </CardContent>
                        </Collapse>
                        </Card>
                    </Grid>
            </Fragment>
        )
    }
}

AlbumCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default (withStyles(styles)(withRouter(AlbumCard)));