import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Contact extends Component {
    state ={

    }
    handleInputChange=()=>{

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
                    <form name="contact" method="POST">
                        <input type="hidden" name="form-name" value="contact" />
                        <h1>CONTACT</h1>
                        <div className='field-container'>
                            <div className='row'>
                                <input type='text' name='name' placeholder='Name' required />
                                <input type='text' name='company' placeholder='Company' />
                            </div>
                            <div className='row'>
                                <input type='email' name='email' placeholder='Email' required />
                                <input type='text' name='subject' placeholder='Subject' required />
                            </div>
                            <textarea placeholder='Message' rows="10" cols="50" required />
                        </div>
                        <button className='btn' type='submit'>Submit</button>
                    </form>
                </section>
                
        )
    } 
}



export default Contact;