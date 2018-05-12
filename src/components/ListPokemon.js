import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ListPokemons extends Component {
    constructor(){
        super()
        this.state = {
            isList:true,
            details: {
                "capture_rate": "",
                "habitat": {
                    "name": ""
                },
                "color": {
                    "name": ""
                },
            }
        }
    }

    handleClick(url) {
        // e.preventDefault();
        this.setState({
            isList: false,
        })
        axios.get(url)
        .then(response => {
            this.setState({details: response.data.pokemon_species})
        })

        console.log('The link was clicked.');
    }

    render(){
        const list = this.props.list;
        const listPokemons = list.map((element) =>
        <li key={element.name}>
            <a href="#" onClick={this.handleClick(element.url)}>{element.name}</a>
        </li>
        );

        if(this.state.isList){
            return (
                <ul>{listPokemons}</ul>
            );
        }
        return <About details={this.state.details}/>;
    }
}
export const About = (props)=> {
    return (
        <div>
            <p><b>Capture Rate:</b> {props.details.capture_rate}</p>
            <p><b>Habitat:</b>{props.details.habitat.name}</p>
            <p><b>Color:</b>{props.details.color.name}</p>
        </div>
    );
}


export default ListPokemons;