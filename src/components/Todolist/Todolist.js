import React, {Component} from 'react';
import './Todolist.scss'

class Todolist extends Component {
    render() {
        return (
            <div className="todoSection container">
                <h2>Contact us</h2>
                <div className="d-flex justify-content-center">
                    <div className="d-flex flex-column ">
                        <p>Expect efficient and reliable service as we complete your project in just 2-3 weeks. Trust us
                            to operate seamlessly and deliver exceptional results.</p>
                        <div className="formTodo">
                            <form action="">
                                <label htmlFor="firstName">Your Name</label>
                                <input className="form-control" type="text" name="firstName" id="firstName"/>
                                <div className="d-flex mt-3">
                                    <span className="w-100">
                                    <label htmlFor="email">Your email</label>
                                    <input type="email" className="form-control w-100 mt-3" id="email"/>
                                </span>
                                <span className="w-100 ms-3">
                                    <label htmlFor="tel">Phone number</label>
                                    <input type="tel" className="form-control mt-3" id="tel"/>
                                    </span>
                                </div>
                                <label htmlFor="text" className="mt-3">Please describe your project</label>
                                <textarea name="text" id="text" rows="5" className="w-100 mt-3"></textarea>
                                <button className="sabmit">Send</button>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

export default Todolist;