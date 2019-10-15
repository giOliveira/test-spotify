import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ArtistCard from '../../components/artistCard';
import { flexbox } from '@material-ui/system';

const styles = () => ({
    root: {
        padding: 10,
        marginTop: 30,
      },
});

class Main extends Component {
    
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {

        const {classes} = this.props;
        

        return (
            <Fragment>
                <div className={classes.root}>
                </div>
            </Fragment>
        )
    }
}

Main.propTypes = {
    classes: PropTypes.object.isRequired
};

export default (withStyles(styles)(withRouter(Main)));