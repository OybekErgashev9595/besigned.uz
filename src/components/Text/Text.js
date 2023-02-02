import React, {Component} from 'react';
import './Text.scss'

class Text extends Component {
    render() {
        const text = "Experience the transformative power of our brand strategy\n" +
        "                    and design thinking services";

            return (
            <div className="textSection">
                <h4>{this.props.text}</h4>
                <h4>{this.props.text1}</h4>
            </div>
        );
    }
}

export default Text;