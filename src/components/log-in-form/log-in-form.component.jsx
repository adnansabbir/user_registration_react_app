import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class LogInForm extends Component {
    constructor({history}) {
        super();

        this.state = {
            email: '',
            password: '',
            history: history,
            users: []
        }
    }

    onInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();
        const user = this.state.users.find(user => user.email === this.state.email && user.password === this.state.password);
        if (user) {
            localStorage.setItem('logged_in_user', JSON.stringify(user));
            this.state.history.push('/dashboard');
        } else {
            this.setState({
                form_error: "Wrong Email or Password"
            })
        }
    };

    componentDidMount() {
        this.setState({
            users: JSON.parse(localStorage.getItem('users'))
        })
    }

    render() {
        return (
            <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="500">
                <form action="" method="post" className="form-box">
                    <h3 className="h4 text-black mb-4">Log In</h3>
                    <p className="text-danger">{this.state.form_error}</p>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Addresss" id='email'
                               onChange={this.onInputChange} required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" id='password'
                               onChange={this.onInputChange} required="required"/>
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-pill" value="Log In"
                               onClick={this.onFormSubmit}/>
                    </div>
                </form>

            </div>
        )
    }
}

export default withRouter(LogInForm);