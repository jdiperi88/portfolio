import React, { Component } from 'react';
import './styles/main.css';
import Header from './components/Header'
import { BrowserRouter as Router} from 'react-router-dom'
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
      </div>
      </Router>
    );
  }
}

export default App;
