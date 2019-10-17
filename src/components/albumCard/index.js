import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {Card, CardHeader, CardMedia, CardContent, CardActions, Collapse, IconButton, Typography, Grid} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FavoriteIcon from '@material-ui/icons/Favorite';

const styles = () => ({
      container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 15,
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
      }
});

class AlbumCard extends Component {
    
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

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
                            image={this.props.img}
                            title={this.props.name}
                        />
                        <CardContent>
                            <Typography variant="body2" component="p">
                            {this.props.artist.map((artist) => artist.name).toString()}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon className={classes.icon}/>
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
                                {this.props.tracks}
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