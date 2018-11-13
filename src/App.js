import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

import Cats from './pages/Cats';
import NewCat from './pages/NewCat';
import Header from './components/Header';
import About from './components/About';
import Home from './components/Home';

// import { getCats } from './api';

import Erebus from './kittypics/erebus.jpg';
import Kris from './kittypics/kris.jpg';
import G1 from './kittypics/g1.jpeg';
import Dre2 from './kittypics/dre2.jpeg';
import Snoop2 from './kittypics/snoop2.jpeg';
import Cupcake from './kittypics/cupcake.jpg';
import G3 from './kittypics/g3.jpg';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cats: [
        {
          name: 'G',
          age: 5,
          enjoys: 'hunting',
          image: G3
        },
        {
          name: 'Snoop',
          age: 2,
          enjoys: 'yowling',
          image: Snoop2
        },
        {
          name: 'Dre',
          age: 2,
          enjoys: 'cuddling',
          image: Dre2
        }
      ]
    }
  }

  // componentWillMount() {
  //   getCats()
  //   .then(APIcats => {
  //     this.setState({
  //       cats: APIcats
  //     })
  //   })
  // }

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
                    <Route exact path="/about" component={About} />
                    <Route path="/" component={Home} />
                </Switch>
            </Router>
      </div>
    );
  }
}

export default App;
