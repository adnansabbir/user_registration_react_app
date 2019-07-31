import React, {Component} from 'react';

class LogInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        }
    }

    onInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });
    };

    onFormSubmit = (event) => {
        event.preventDefault();

        if (this.state.email && this.state.password){
            console.log("Logged In");
        }else {
            this.setState({
                form_error:"There are errors in the form"
            })
        }


    };

    render() {
        return (
            <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="500">
                <form action="" method="post" className="form-box">
                    <h3 className="h4 text-black mb-4">Log In</h3>
                    <p className="text-danger">{this.state.form_error}</p>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Addresss" id='email'
                               onChange={this.onInputChange}  required="required"/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" id='password' onChange={this.onInputChange}  required="required"/>
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

export default LogInForm;