import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Cats from './pages/Cats';
import NewCat from './pages/NewCat';
import Header from './pages/Header';

import { getCats } from './api';

import Erebus from './kittypics/erebus.jpg';
import Kris from './kittypics/kris.jpg';
import G1 from './kittypics/g1.jpeg';
import Dre2 from './kittypics/dre2.jpeg';
import Snoop2 from './kittypics/snoop2.jpeg';
import Cupcake from './kittypics/cupcake.jpg';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: []
    }
  }

  componentWillMount() {
    getCats()
    .then(APIcats => {
      this.setState({
        cats: APIcats
      })
    })
  }

  handleNewCat(newcat) {
    let { cats } = this.state
    cats = cats.push(newcat)
    this.setState({
      cats: cats
    })
  }

  render() {
    return (
      <div className="App">
        <Header />
            <Router>
                <Switch>
                    <Route exact path="/cats" render={(props) => <Cats cats={this.state.cats}/>} />
                    <Route exact path="/cats/new" render={(props) => <NewCat newcat={this.handleNewCat}/>} />
                </Switch>
            </Router>
      </div>
    );
  }
}

export default App;
