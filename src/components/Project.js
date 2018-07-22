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
                    {deployed_link ? <a href={deployed_link} target='_blank'><h1>{id}</h1></a> : <h1>{id}</h1> }
                    <img 
                        src={require(`../images/${image}`)}
                    />
                    <p dangerouslySetInnerHTML={{ __html: description}} />
                    <p>{technologies_used}</p>
                    {github_link && 
                        <a href={github_link} target='_blank'><img className='project-git' src={require('../images/git.png')} /></a>
                    }
                    
                </div>
                
        )
    } 
}



export default Project;
