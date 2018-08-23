import React, { Component } from 'react';
import axios from 'axios';
import ListPokemons from './ListPokemon';
import { connect } from 'react-redux'

class List extends Component {
    constructor(){
        super()
        this.state = {
            list: []
        };
        axios.get('https://pokeapi.co/api/v2/egg-group/1')
            .then(response => {
                this.setState({list: response.data.pokemon_species})
            })
    }

    render() {
        return (
            <ul>
                <ListPokemons list={this.state.list}></ListPokemons>
            </ul>
        );
    }
}

export default connect()(List)