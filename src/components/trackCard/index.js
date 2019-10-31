import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, IconButton, Typography, Grid} from '@material-ui/core/';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {favoriteItem} from '../../functions'

const styles = () => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      card: {
        width: '90%',
        backgroundColor: '#1e1e1e',
        color: '#f2f2f2',
        display: 'flex',
        margin: 10
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
    },
    playIcon: {
      height: 38,
      width: 38,
    },
    favorite: {
        color: 'red'
    }
  })

class TrackCard extends Component {

    state = {favorite: this.props.favorite };

    favorite = (id) => {
        console.log(this.props.id)
        this.setState(state => ({ expanded: !state.favorite }));
        favoriteItem(id)
    }

    render() {

        const {classes} = this.props;
        
        return (
            <Fragment>
                <Grid item xs={12} md={4} className={classes.container}>
                    <Card className={classes.card}>
                        <div className={classes.details}>
                            <CardContent className={classes.content}>
                            <Typography component="h5" variant="h5">
                                {this.props.name}
                            </Typography>
                            <Typography variant="subtitle2">
                                Album: {this.props.album}
                            </Typography>
                            <Typography variant="subtitle2">
                                Artista: {this.props.artist.map((artist) => artist.name).toString()}
                            </Typography>
                            <Typography variant="subtitle2">
                                Duração: {(this.props.duration/60000).toFixed(1)}
                            </Typography>
                            <IconButton 
                                className={this.props.favorite}
                                aria-label="add to favorites" 
                                onClick={(event) => this.favorite(this.props.id)}
                            >
                                <FavoriteIcon className={classes.icon, {
                                    [classes.favorite]: this.state.favorite
                                }}/>
                            </IconButton>
                            </CardContent>
                        </div>
                        <CardMedia
                            className={classes.cover}
                            image={this.props.img ? this.props.img : 'https://picsum.photos/id/904/200/300?grayscale'}
                            title={this.props.name}
                        />
                    </Card>
                </Grid>
            </Fragment>
        )
    }
}

TrackCard.propTypes = {
    classes: PropTypes.object.isRequired
};

export default (withStyles(styles)(withRouter(TrackCard)));