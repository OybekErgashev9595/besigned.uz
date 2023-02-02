import React, {Component} from 'react';
import './ImgLink.scss'

class ImgLink extends Component {
    render() {
        return (
            <div className="imgLink container">
                <div className="row imgs">
                    <div className="col-md-6 img1">
                        <img src={require('../assets/Pepsi.png')} className="rounded" alt=""/>
                    </div>
                    <div className="col-md-6 img1">
                        <img src={require('../assets/Icars.png')} className="rounded"  alt=""/>
                    </div>
                    <div className="col-md-6 img1">
                        <img src={require('../assets/slyde.png')} className="rounded"  alt=""/>
                    </div>
                    <div className="col-md-6 img1">
                        <img src={require('../assets/Artboard.png')} className="rounded"  alt=""/>
                    </div>

                </div>

                
            </div>
        );
    }
}

export default ImgLink;