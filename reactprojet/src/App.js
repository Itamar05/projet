import ListItem from './components/ListItem/ListItem'
import React, { Component } from 'react'
import Carousel from './components/Includes/Carousel.js';
import Entete from './components/Includes/Entete.js'
import Footer from './components/Includes/Footer'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SingleItem from './components/SingleItem/SingleItem';
// import SingleItem from './components/SingleItem'

export class App extends Component {
  constructor(props){
    super(props)

  this.state = {
    data: ''
  }
}


 

  render() {

    return (

    <div style={{display: 'flex', flexDirection: 'column' }}>
          <Router>
            <Switch>
              <Route exact path='/'>
                    <Entete />
                    <Carousel />
                    <ListItem displayProps={this.displayProps}  />
                    <Footer /> 
              </Route>
             
            </Switch>
          </Router>
    </div>
    )
  }
}

export default App;
