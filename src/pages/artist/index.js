import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core/';
import ArtistCard from '../../components/artistCard';

const styles = () => ({
    root: {
        flexGrow: 1,
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
                        <ArtistCard 
                            name="Rihanna"
                            img="https://files.directtalk.com.br/1.0/api/file/public/01bab00a-7a1e-4737-868e-7bf04d605856/content-inline"
                            desc="teste teste"
                            list="teste" />

                        <ArtistCard 
                            name="Rihanna"
                            img="https://files.directtalk.com.br/1.0/api/file/public/01bab00a-7a1e-4737-868e-7bf04d605856/content-inline"
                            desc="teste teste"
                            list="teste" />
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