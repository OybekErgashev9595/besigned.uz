import React, {Component} from 'react';
import './Footer.scss'

class Footer extends Component {
    render() {
        return (
            <footer className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="logofotter">
                            <img src={require('../assets/logo.png')} alt=""/>
                            <p>C 2022 All Rights reserved
                                Be Signed  LLC</p>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className='company'>
                            <h2>Company</h2>
                            <a href="#">Services</a>
                            <a href="#">Projects</a>
                            <a href="#">Reviews</a>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="contact">
                            <h2>Conatcts</h2>
                            <span>
                            <img src={require('../assets/call2.png')} alt=""/>
                            <a href="#">+1 (504) 333 5601</a>
                            </span>
                                <span>
                                <img src={require('../assets/instagram.png')} alt=""/>
                                <a href="#">@besigned.us</a>
                            </span>
                                <span>
                                <img src={require('../assets/email.png')} alt=""/>
                                <a href="#">customer@besigned.us</a>
                            </span>
                        </div>
                    </div>
                </div>

            </footer>
        );
    }
}

export default Footer;