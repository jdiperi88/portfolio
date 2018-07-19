import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Project from './Project';
import data from '../data/data.json'
class ProjectContainer extends Component {


    render(){
        let {
  } 
            = this.props
        return(
                <section id='project' >
                    <div className='project-picture'>
                        <h1>PROJECTS</h1>
                    </div>
                    <div className='project-list'>

                        {data.map(item =>{
                            const { id, image, description, technologies_used, deployed_link, github_link } = item
                            return (
                                <Project
                                    id={id}
                                    image ={image}
                                    description={description}
                                    technologies_used={technologies_used}
                                    deployed_link={deployed_link}
                                    github_link={github_link}
                                />
                            )
                        })}

                    </div>
                </section>
                
        )
    } 
}



export default ProjectContainer;