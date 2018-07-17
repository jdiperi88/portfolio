import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Home extends Component {


    render(){
        let {
            } 
            = this.props
        return(
            <section id={`home`}>
                <div className='main-background'>
                    <img src ={require('../images/logo.png')} />
                </div>
            </section>
                
        )
    } 
}



export default Home;