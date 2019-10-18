import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Card, CardContent, CardMedia, IconButton, Typography, Grid} from '@material-ui/core/';

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
    }
  })

class TrackCard extends Component {

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