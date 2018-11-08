import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Cats from './pages/Cats';
import NewCat from './pages/NewCat';
import Header from './pages/Header';

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
      cats: [
        {
          id: 0,
          name: 'Erebus',
          age: 3,
          enjoys: 'darkness',
          image: Erebus
        },
        {
          id: 1,
          name: 'Kris',
          age: 1,
          enjoys: 'fucking meowing',
          image: Kris
        },
        {
          id: 2,
          name: 'G',
          age: 5,
          enjoys: 'hunting',
          image: G1
        },
        {
          id: 3,
          name: 'Cupcake',
          age: 11,
          enjoys: 'domination',
          image: Cupcake
        },
        {
          id: 4,
          name: 'Dre',
          age: 2,
          enjoys: 'love',
          image: Dre2
        },
        {
          id: 5,
          name: 'Snoop',
          age: 2,
          enjoys: 'snuggles',
          image: Snoop2
        }
      ]
    }
  }
  render() {
    return (
      <div className="App">
        <Header />
            <Router>
                <Switch>
                    <Route exact path="/cats" render={(props) => <Cats cats={this.state.cats}/>} />
                    <Route exact path="/" component={NewCat} />
                </Switch>
            </Router>
      </div>
    );
  }
}

export default App;
