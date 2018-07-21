import React from "react";
import Slider from "react-slick";
  
class Carousel extends React.Component {
  constructor(){
    super();


    // this.props.openShopModal(this.state.image1)
  }
  render() {
    let {settings, 
        filter, 
        languages, 
        libraries,
        deployment,
        handleSelectedFilterChange
    } = this.props
    return (
      <div>
        <div className='carousel-container'>
        <Slider {...settings}>
          {filter == 'languages' &&
            languages.map(language =>(
              <img onClick={()=>handleSelectedFilterChange(language)} src={require(`../images/${language}.png`)}/> 
            )) 
          }

          {filter == 'frameworks/libraries' &&
            libraries.map(library =>(
              <img onClick={()=>handleSelectedFilterChange(library)} src={require(`../images/${library}.png`)}/> 
            )) 
          }

          {filter == 'deployment' &&
            deployment.map(e =>(
              <img onClick={()=>handleSelectedFilterChange(e)} src={require(`../images/${e}.png`)}/> 
            )) 
          }
          
        </Slider>
          </div>
        </div>
    );
  }
}

export default Carousel;