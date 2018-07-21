import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Project from './Project';
import Carousel from './Carousel';
import data from '../data/data.json'
class ProjectContainer extends Component {
    state = {
        filter: 'none',
        status: 'hide'
    }
    handleFilterChange = (filter) =>{
        this.setState({
            filter,
            status: 'hide'
        })
    }
    handleStatusChange = () =>{
        this.setState({
            status: 'show'
        })
    }

    render(){
        let {
            } 
            = this.props
            let {
                filter,
                status
            } = this.state
        return(
                <section id='project' >
                    <div className='project-picture'>
                        <h1>PROJECTS</h1>
                    </div>
                    <div className='project-list'>
                        <div className='project-type-container'>
                            <button 
                                className='btn'
                                onClick={()=>this.handleStatusChange()}
                            >
                                {filter == 'none' ?'Select Project Type' : filter }
                            </button>
                            <div className={`dropdown-container ${status}`}>
                                <div onClick={()=>this.handleFilterChange('All Projects')}>All Projects</div>
                                <div onClick={()=>this.handleFilterChange('Language')}>Language</div>
                                <div onClick={()=>this.handleFilterChange('Library')}>Library</div>
                                <div onClick={()=>this.handleFilterChange('Deployment')}>Deployment</div>
                            </div>
                        </div>
                        <Carousel 
                            settings = {{
                                dots: true,
                                infinite: true,
                                speed: 500,
                                slidesToShow: 2,
                                // responsive: [
                                //     {
                                //       breakpoint: 640,
                                //       settings: {
                                //         slidesToShow: 1,
                                //       }
                                //     }]
                            }} 
                        
                        />

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