import React from "react";
import Slider from "react-slick";

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    let left = require('../images/left-arrow.png'),
    leftUrl = `url(${left}`
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: leftUrl, width:'44px', height:"76px"}}
        onClick={onClick}
      />
    );
  }

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    let right = require('../images/right-arrow.png'),
        rightUrl = `url(${right}`

    return (

      <div
        className={className}
        style={{ ...style, display: "block", background: rightUrl, width:'44px', height:"76px"}}
        onClick={onClick}
      />
    );
  }

  
class Carousel extends React.Component {
  constructor(){
    super();


    // this.props.openShopModal(this.state.image1)
  }
  render() {
    let {settings } = this.props
    return (
      <div>
        <div className='carousel-container'>
        <Slider {...settings}>
            <img src={require(`../images/node-js.png`)}/>  
            <img src={require(`../images/react.png`)}/>  
            <img src={require(`../images/ruby.jpeg`)}/>  

          
        </Slider>
          </div>
        </div>
    );
  }
}

export default Carousel;