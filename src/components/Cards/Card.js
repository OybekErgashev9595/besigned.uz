import React, {Component} from 'react';
import './Card.scss';

class Card extends Component {
    render() {
        const obj = this.props.obj;
        return (
            <div className="cardSection container">
                <div className="row">
                    {obj.map((item, index)=>(
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-2">
                                    <h1>{item.number}</h1>
                                </div>
                                <div className="col-10">
                                    <h2>{item.title}</h2>
                                    <p>{item.text}</p>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
                
            </div>
        );
    }
}

export default Card;