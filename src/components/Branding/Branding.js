import React, {Component} from 'react';
import './Branding.scss'

class Branding extends Component {
    render() {
        return (
            <div className="branding container">
                <div className="imgBrand">
                    <img src={require('../assets/BrandingImg.png')} alt=""/>
                </div>
                <div className="row justify-content-between">
                    <div className="col-md-4 ">
                        <p className="text">Driven by a passion for creating meaningful connections,
                            our team of specialists will work with you to develop
                            a powerful brand identity and rapidly drive online success.</p>
                    </div>
                    <div className="col-md-4 imgTap">
                        <img src={require('../assets/tap.png')} alt=""/>
                    </div>
                    <div className="col-md-4">
                        {/*<img src={require('../assets/tap.png')} alt=""/>*/}
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Branding;