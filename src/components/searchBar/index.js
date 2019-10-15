import React, {Component, Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Select, Input, Grid, Button } from '@material-ui/core';

const styles = () => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#1e1e1e',
        color: '#f2f2f2',
        padding: 10,
        borderRadius: 10,
      },
      paper: {
        textAlign: 'center',
      },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    select: {
        width: '90%',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '1px solid #828282',
        height: 32,
        color: '#939393',
        fontSize: 16,
        fontFamily: 'sans-serif',
    },
    input: {
        width: '90%',
        backgroundColor: 'transparent',
        border: 'none',
        borderBottom: '1px solid #828282',
        height: 32,
        color: '#939393',
        fontSize: 16,
        fontFamily: 'sans-serif',
    },
    button: {
        width: '90%',
        backgroundColor: '#1DB954',
    },
});

class SearchBar extends Component {

    state = {
        select: null,
        input: null
    }

    optionHandler = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleClick = () => {
        if (this.state.input === '' || !this.state.input || this.state.select === '' || !this.state.select) {
            return
          }
          this
            .props
            .history
            .push(`/${this.state.select}/${this.state.input}`);
    }


    render() {

        const {classes} = this.props;

        return (
            <Fragment>
                <div className={classes.root}>
                    <Grid container>
                        <Grid item xs={12} md={3} className={classes.container}>
                            <select
                            name="select"
                            className={classes.select}
                            onChange={(event) => this.optionHandler(event)}
                            >
                                <option value="" disabled selected>Selecione</option>
                                <option value="artista">Artista</option>
                                <option value="album">Álbum</option>
                                <option value="musica">Música</option>
                            </select>
                        </Grid>
                        <Grid item md={6} xs={12} className={classes.container}>
                            <input
                                placeholder="Pesquise Artistas, Albuns ou Músicas"
                                className={classes.input}
                                name="input"
                                onChange={(event) => this.optionHandler(event)}
                            />
                        </Grid>
                        <Grid item md={3} xs={12} className={classes.container}>
                            <Button 
                                variant="contained" 
                                color="primary" 
                                className={classes.button}
                                onClick={this.handleClick}>
                                Buscar
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            </Fragment>
        )
    }
}

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default (withStyles(styles)(withRouter(SearchBar)));