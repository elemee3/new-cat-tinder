import React, { Component } from 'react';
import '../App.css';
import { Grid, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';

class Cats extends Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {this.props.cats.map((cat, index) =>{
                return (
                <ListGroupItem
                    key={index}
                    header={
                      <h4>
                        <span className='cat-name'>
                          {cat.name}
                        </span>
                    -   <small className='cat-age'>{cat.age} years old</small>
                      </h4>
                  }>
                  <span className='cat-enjoys'>
                    Enjoys: {cat.enjoys}
                  </span>
                  <br />
                  <img src={cat.image} />
                </ListGroupItem>
                )
              })}
              </ListGroup>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default Cats;
