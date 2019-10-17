import React, { Component } from 'react';
import {Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import SearchBar from './components/searchBar'
import Main from './pages/main'
import Artist from './pages/artist'
import Album from './pages/album'
import Track from './pages/track'

const styles = () => ({
    container: {
        padding: 30,
    },
})

class App extends Component {

  render() {

    const {classes} = this.props;

    return (
      <div className={classes.container}>
        <SearchBar/>
          <Switch>
              <Route exact path='/' component={Main}/>
              <Route path='/artista/:name' component={Artist}/>
              <Route path='/album/:name' component={Album}/>
              <Route path='/musica/:name' component={Track}/>
          </Switch>
      </div> 
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default (withStyles(styles)(App));