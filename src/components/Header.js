import React, {Component} from 'react';
import {Link} from 'react-router-dom'
class Header extends Component {


    render(){
        let {
            navIsOpen, 
            active,openNav, 
            closeNav} 
            = this.props
        return(
                <header className="flex navbar">
                    <div className="row walmart-box">
                        <a href="//walmart.com" target="_blank" className="walmart"></a>
                    </div>
                    <div className="row logobox">
                    </div>
                    {/* <div className="row menu-box">
                        <div className="menu-button"></div>
                    </div> */}
                    <div className={navIsOpen} id='nav-icon' 
                        onClick={()=>{
                            openNav();
                        }} >
                        <div id='list-lines'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className={'nav-menu ' + active}>
                        <Link  to="/"><li onClick={()=>closeNav()} >Home</li></Link>
                        <Link  to="/great-outdoors"><li onClick={()=>closeNav()}>Great outdoors</li></Link>
                        <Link  to="/casual-cookouts"><li onClick={()=>closeNav()}>casual cookouts</li></Link>
                        <Link  to="/backyard-blasts"><li onClick={()=>closeNav()}>backyard blasts</li></Link>
                        <Link  to="/badge-builder"><li onClick={()=>closeNav()}>badge builder</li></Link>

                    </div>
                    {/* <div className='dropdown-overlay'>
                    </div> */}
                </header>
                
        )
    } 
}



export default Header;