import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as urlActions from '../actions';
import { withRouter } from 'react-router-dom'
import {bindActionCreators} from 'redux';

class ListPokemons extends Component {
    constructor(props){
        super(props)
        this.state = {
            isList: true,
            isLoading: false,
            details: {
                capture_rate: "",
                habitat: {
                    name: ""
                },
                color: {
                    name: ""
                },
            }
        }
    }

    handleClick = (url) => {
        this.props.actions.changeUrl(url);
        this.props.history.push("details");
    }

    render(){
        const list = this.props.list;
        const listPokemons = list.map((element) =>
        <li key={element.name}>
            <a href="#" onClick={() => this.handleClick(element.url)}>{element.name}</a>
        </li>
        );

        return <ul>{listPokemons}</ul>;
    }
}
// export const About = (props)=> {
//     return
// }

const mapStateToProps = state => ({
    url: state.pokemons.url
})


const mapDispatchToProps = dispatch => {
    return {actions: bindActionCreators(urlActions, dispatch)}
}

const ListPokemonComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(ListPokemons);

export default withRouter(ListPokemonComponent);