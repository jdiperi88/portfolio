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
                <div className='row'>
                    <div className='flex-image-container mobile-hide'>
                    <img src={require('../images/fullStacksideways.png')} />
                    </div>
                    <div class="aboutColumn">
                        <h1>JOSEPH DIPERI</h1>
                        <p>
                            I am a native New Yorker with a passion for technology, eager to solve challenging problems. 
                            I enjoy creating projects that tackle current needs. Challenges that drive me to stretch my 
                            horizons academically, leading me to a diverse,  international background in real estate, management, and education. 
                        </p>
                        <p>
                        My love of traveling has enabled me to meet people of diverse backgrounds and gain insights about the world outside the 
                        United States. I enjoy acquiring languages, and became proficient in Mandarin during my three-year stint in China.
                        </p>
                        <p class='lastParagraph'>
                            Given my enjoyment with technology, I know that I can combine my new skills with my previous experiences to make an important contribution to the development industry.
                        </p>
                        <div class='icon-row'>
                            <a href="https://www.linkedin.com/in/jdiperi" target="_blank">
                            <img src={require('../images/linkedin.png')} />
                            </a>
                            <a href="https://github.com/jdiperi88" target="_blank">
                                <img src={require('../images/git.png')} />
                            </a>
                            <a target="_blank" href='Resume_Jdiperi.pdf' >
                            <img src={require('../images/resume.jpg')} />
                            </a>
                        </div>    
                    </div>
                    <div className='flex-image-container'>
                        <img src={require('../images/jdiperi.png')} />
                    </div>
                </div>
            </section>
                
        )
    } 
}



export default Home;