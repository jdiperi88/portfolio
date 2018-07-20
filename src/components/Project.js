import React, {Component} from 'react';
import {Link} from 'react-router-dom'


class Project extends Component {

    render(){
        let {
            id,
            image, 
            description, 
            technologies_used, 
            deployed_link, 
            github_link
            } 
            = this.props
        return(
                <div className='project-container'>
                    <a href={deployed_link} target='_blank'><h1>{id}</h1></a>
                    <img 
                        src={require(`../images/${image}`)}
                    />
                    <p>{description}</p>
                    <p>{technologies_used}</p>
                    <a href={github_link} target='_blank'><img className='project-git' src={require('../images/git.png')} /></a>
                    
                </div>
                
        )
    } 
}



export default Project;