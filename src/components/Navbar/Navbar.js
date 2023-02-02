import React, {Component} from 'react';
import './Navbar.scss'

class Navbar extends Component {
    render() {
        return (
            <nav className="container">
                <a href=""><img src={require('../assets/logo.png')} alt=""/></a>
                <ul>
                    <li><a href="">Web Development</a></li>
                    <li><a href="">App Development</a></li>
                    <li><a href="">Branding</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
                <a href=""><img src="" alt=""/><img src={require('../assets/call.png')} alt=""/></a>


            </nav>
        );
    }
}

export default Navbar;