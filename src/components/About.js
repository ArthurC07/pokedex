import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { Grid, Row, Col } from 'react-bootstrap';
import { changeUrl } from '../actions';

class About extends Component {
    constructor(){
        super()
        this.state = {
            isLoading: true,
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
    componentDidMount() {
       axios.get(this.props.url)
        .then(response => {
            this.setState({
                details: {
                    ...response.data,
                    habitat: response.data.habitat ? response.data.habitat : {name:' ----- '}
                },
                isLoading: false
            })
        })
    }

    render(){
        return (
            <div>
                <Grid>
                    <Row>
                        <hr/>
                    </Row>
                    <Row>
                        <Col md={4}>
                            <p><b>Name:</b> {this.state.details.name}</p>
                            <p><b>Capture Rate:</b> {this.state.details.capture_rate}</p>
                            <p><b>Habitat:</b>{this.state.details.habitat.name}</p>
                            <p><b>Color:</b>{this.state.details.color.name}</p>
                        </Col>
                        {this.state.isLoading &&
                            <Col md={5}>
                                <img width="50" src="../spinner.gif"/>
                            </Col>
                        }
                    </Row>
                    <Row>
                        <Link to='/'>Back</Link>
                    </Row>
                </Grid>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        url: state.pokemons.url
    }
}

const mapDispatchToProps = dispatch => ({
    changeUrl: url => dispatch(changeUrl(url))
})

const AboutComponent = connect(
    mapStateToProps,
    mapDispatchToProps
  )(About);

export default AboutComponent;