
import React, { Component } from 'react'
import  "./Navbar.css"
import logo from '../assets/logo.jpg'


class Navbar extends Component {
    state = { clicked: false };
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }
    render() {
  return (
   <>
    <nav>
        <a href='Home'>
            <img src={logo} alt='' />
        </a>
        <div>
            <ul id='navbar'>
                <li className="nav-item"><a className='active' href='#'>Home</a></li>
                <li className="nav-item"><a href='#'>Feature</a></li>
                <li className="nav-item"><a href='#'>Store</a></li>
                <li className="nav-item"><a href='#'>SkilPil</a></li>
                <li className="nav-item"><a href='#'>Blog</a></li>
                <li className="nav-item"><a href='#'>Student Ambassadors</a></li>
                <li className="nav-item"><a href='#'>NEET</a></li>
                <li className="nav-item"><a href='#'>Our Team</a></li>
            </ul>
        </div>
        <div id='mobile' onClick={this.handleClick}>
            <i id='bar'className= {this.state.clicked ? 'fas fa-times': 'fas fa-bars'} ></i>
        </div>
    </nav>
    
   </>
  )
}
}

export default Navbar