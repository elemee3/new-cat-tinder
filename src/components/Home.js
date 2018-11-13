import React, { Component } from 'react';
import '../App.css';
import { Carousel, Button } from 'react-bootstrap';

import Group1 from '../kittypics/group1.JPG';
import Group2 from '../kittypics/group2.JPG';
import Group3 from '../kittypics/group3.JPG';
import Group4 from '../kittypics/group4.JPG';
import Group5 from '../kittypics/group5.JPG';

class Home extends Component {
  render() {
    return (
      <Carousel className="carousel">
        <Carousel.Item>
          <Carousel.Caption>
            <div className="caption">
              <h1>Meet your Match</h1>
              <h4>Cat Tinder is the place to connect with other cats and share hunting spots, play dates, human manipulation tricks, and so much more.</h4>
              <Button bsStyle="primary" href="/cats">Browse Cats</Button>
            </div>
          </Carousel.Caption>
          <img src={Group1} />
        </Carousel.Item>
        <Carousel.Item>
          <img src={Group2} />
          <Carousel.Caption>
            <div className="caption">
              <h1>Meet your Match</h1>
              <h4>Cat Tinder is the place to connect with other cats and share hunting spots, play dates, human manipulation tricks, and much much more.</h4>
              <Button bsStyle="primary" href="/cats">Browse Cats</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Group3} />
          <Carousel.Caption>
            <div className="caption">
              <h1>Meet your Match</h1>
              <h4>Cat Tinder is the place to connect with other cats and share hunting spots, play dates, human manipulation tricks, and much much more.</h4>
              <Button bsStyle="primary" href="/cats">Browse Cats</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Group4} />
          <Carousel.Caption>
            <div className="caption">
              <h1>Meet your Match</h1>
              <h4>Cat Tinder is the place to connect with other cats and share hunting spots, play dates, human manipulation tricks, and much much more.</h4>
              <Button bsStyle="primary" href="/cats">Browse Cats</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Group5} />
          <Carousel.Caption>
            <div className="caption">
              <h1>Meet your Match</h1>
              <h4>Cat Tinder is the place to connect with other cats and share hunting spots, play dates, human manipulation tricks, and much much more.</h4>
              <Button bsStyle="primary" href="/cats">Browse Cats</Button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Home;
