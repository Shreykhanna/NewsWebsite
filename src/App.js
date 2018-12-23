import React, { Component } from 'react';
import './assets/homepage.css';
import Header from './components/headercomponents/header';
import Footer from './components/footercomponents/footer';
import Homepage from './components/pages/homepage';
import WorldNews from './components/pages/worldnews';
import SportsNews from './components/pages/sportnews';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header/>
        <Route exact path='/homepage' component={Homepage}/>
        <Route exact path='/worldnews' component={WorldNews}/>
        <Route exact path='/sportnews' component={SportsNews}/>

        <Footer/>
      </div>
      </Router>
    );
  }
}

export default App;
