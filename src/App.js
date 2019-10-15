import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
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
              <Route path='/artista' component={Artist}/>
              <Route path='/album' component={Album}/>
              <Route path='/musica' component={Track}/>
          </Switch>
      </div> 
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default (withStyles(styles)(App));