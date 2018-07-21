import React, { Component } from 'react';
import '../styles/main.css';
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import { BrowserRouter as Router, Route} from 'react-router-dom'
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
        {/* <Route exact to='/test' component={Home} /> */}
        <Route exact to='/' component={ProjectContainer} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
