import React, { Component } from 'react';
import '../App.css';
// import { Grid, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';

class Cats extends Component {
  render() {
    return (
      <div className="Cats-Container">
        {this.props.cats.map((cat, index) => {
          return (
            <div className="Cat-Card">
              <img src={cat.image} />
              <h1>{cat.name}, {cat.age}</h1>
              <h3>Enjoys: {cat.enjoys}</h3>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Cats;
