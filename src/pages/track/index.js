import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import TrackCard from '../../components/trackCard';

const styles = () => ({
    root: {
        padding: 10,
        marginTop: 30,
      },
});

class Artist extends Component {
    
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {

        const {classes} = this.props;
        

        return (
            <Fragment>
                <div className={classes.root}>
                    <Grid container>
                        <TrackCard 
                            name="Sweater Weather"
                            album="I Love You"
                            artist="The Neighbourhood"
                            duration="4:0"
                            img="https://files.directtalk.com.br/1.0/api/file/public/01bab00a-7a1e-4737-868e-7bf04d605856/content-inline"
                            />
                        <TrackCard 
                            name="Sweater Weather"
                            album="I Love You"
                            artist="The Neighbourhood"
                            duration="4:0"
                            img="https://files.directtalk.com.br/1.0/api/file/public/01bab00a-7a1e-4737-868e-7bf04d605856/content-inline"
                            />
                        <TrackCard 
                            name="Sweater Weather"
                            album="I Love You"
                            artist="The Neighbourhood"
                            duration="4:0"
                            img="https://files.directtalk.com.br/1.0/api/file/public/01bab00a-7a1e-4737-868e-7bf04d605856/content-inline"
                            />
                        <TrackCard 
                            name="Sweater Weather"
                            album="I Love You"
                            artist="The Neighbourhood"
                            duration="4:0"
                            img="https://files.directtalk.com.br/1.0/api/file/public/01bab00a-7a1e-4737-868e-7bf04d605856/content-inline"
                            />
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