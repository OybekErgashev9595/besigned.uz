import React, {Component} from 'react';
import "./Brends.scss"

class Brends extends Component {
    render() {
        return (
            <div className="brandingSection container">
                <h3>Brands we worked with</h3>
                <div className="brendImg">
                    <img src={require('../assets/brend1.png')} alt=""/>
                    <img src={require('../assets/brend2.png')} alt=""/>
                    <img src={require('../assets/brend3.png')} alt=""/>
                    <img src={require('../assets/brend4.png')} alt=""/>
                </div>
            </div>
        );
    }
}

export default Brends;