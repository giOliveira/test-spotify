import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {authenticate, redirect} from '../../functions';

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

    componentDidMount() {

        const { location } = this.props;
        const token = localStorage.getItem('secure_token');
        if(!token){
            authenticate(location);
        }
        redirect();
    }

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