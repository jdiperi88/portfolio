import React, { Component } from 'react';
import '../styles/main.css';
import Header from './Header'
import Footer from './Footer'
import Contact from './Contact'
import Home from './Home'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ProjectContainer from './ProjectContainer';
import Carousel from './Carousel';
class App extends Component {
  state ={
    navIsOpen:'',
    active:'',
  }
  openNav=()=>{
    this.setState({
      navIsOpen: this.state.navIsOpen == ''?'open':'',
      active: this.state.active == ''?'active':''

  })
  }

  closeNav=()=>{
    this.setState({
      navIsOpen: '',
      active:''
    })
  }

  
  render() {
    const { navIsOpen, active} = this.state
    return (
      <Router>
      <div className="App">
        <Header
          navIsOpen={navIsOpen}
          active={active}
          openNav={this.openNav}
          closeNav={this.closeNav}
        />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Projects' component={ProjectContainer} />
        <Route exact path='/Contact' component={Contact} />
      </Switch>
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
