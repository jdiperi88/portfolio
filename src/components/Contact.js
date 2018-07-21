import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Contact extends Component {

    handleFormSubmit= (e)=>{
        e.preventDefault()
    }
    render(){
        let {
       } 
            = this.props
        return(
                <section id='contact'>
                    <div className='contact-photo'>
                        <img src={require('../images/keyboard.jpg')}/>
                    </div>
                    <form>
                        <h1>CONTACT</h1>
                        <div className='field-container'>
                            <div className='row'>
                                <input type='text' name='name' placeholder='Name' />
                                <input type='text' name='company' placeholder='Company' />
                            </div>
                            <div className='row'>
                                <input type='text' name='email' placeholder='Email' />
                                <input type='text' name='subject' placeholder='Subject' />
                            </div>
                            <textarea placeholder='Message' rows="10" cols="50" />
                        </div>
                        <button onClick={(e)=>this.handleFormSubmit(e)} className='btn' type='submit'>Submit</button>
                    </form>
                </section>
                
        )
    } 
}



export default Contact;