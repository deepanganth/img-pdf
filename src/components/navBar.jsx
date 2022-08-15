import React, { Component } from 'react';
import '../components/navBar.css';
import logo from '../components/images/logo.jpg';
class Navbar extends Component {
    render() { 
        return (
            <div class="nav-bar">
                <div class="logo">
                    <img src={logo} alt="" />
                    <h1>DEV_DEEPAN</h1>
                </div>
                <div class="nav-item">
                    <a href="">Home</a>
                    <a href="">Share</a>
                    <a href="">FAQ</a>
                </div>
                <div class="contact">
                    <button>Contact</button>
                </div>
            </div>
        )
    }
}
 
export default Navbar;