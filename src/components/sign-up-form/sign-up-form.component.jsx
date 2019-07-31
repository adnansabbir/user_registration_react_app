import React, {Component} from 'react';

class SignUpForm extends Component {
    constructor() {
        super();

        this.state = {
            full_name: '',
            date_of_birth: '',
            email: '',
            password1: '',
            password2: '',
            password2_error: '',
            form_error: '',
            success_message: '',
            role: '',
            users: [],
        }
    }

    onInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });

    };

    onFormSubmit = (event) => {
        event.preventDefault();

        if (this.state.password1 === this.state.password2) {
            this.setState({
                password2_error: ""
            })
        } else {
            this.setState({
                password2_error: "Password Not Matched"
            });
            return
        }

        if (this.state.full_name && this.state.date_of_birth && this.state.email && this.state.password1 && this.state.password2 && this.state.role) {

            // If email exist throw error
            if (this.state.users.find(user=>user.email===this.state.email)){
             this.setState({
                 form_error:"Email Already Exist"
             });
             return
            }

            let user = {
                name: this.state.full_name,
                date_of_birth: this.state.date_of_birth,
                email: this.state.email,
                password: this.state.password,
                role: this.state.role,
            };
            this.state.users.push(user);

            this.setState({
                form_error: "",
                success_message: "User Registered Successfully",
                full_name: '',
                date_of_birth: '',
                email: '',
                password1: '',
                password2: '',
                password2_error: '',
                role: '',
            });

            localStorage.setItem('users', JSON.stringify(this.state.users));


        } else {
            this.setState({
                form_error: "There are errors in the form",
                success_message: ""
            })
        }


    };

    componentDidMount() {
        this.setState({
            users:JSON.parse(localStorage.getItem('users'))
        })
    }

    render() {
        return (
            <div className="col-lg-5 ml-auto" data-aos="fade-up" data-aos-delay="500">
                <form action="" method="post" className="form-box">
                    <h3 className="h4 text-black mb-4">Join Us</h3>
                    <p className="text-danger">{this.state.form_error}</p>
                    <p className="text-success">{this.state.success_message}</p>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Full Name" id='full_name'
                               onChange={this.onInputChange} required="required" value={this.state.full_name}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="date_of_birth">Data of Birth</label>
                        <input type="date" id="date_of_birth" className="form-control" onChange={this.onInputChange}
                               required="required" value={this.state.date_of_birth}/>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Addresss" id='email'
                               onChange={this.onInputChange} required="required" value={this.state.email}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control" placeholder="Password" id='password1'
                               onChange={this.onInputChange} required="required" value={this.state.password1}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control"
                               placeholder="Re-type Password" onChange={this.onInputChange} id='password2'
                               required="required" value={this.state.password2}/>
                        <p className="text-danger">{this.state.password2_error}</p>
                    </div>

                    <div className="form-group mb-4">
                        <label htmlFor="">Select Role</label>
                        <select className='form-control' name="role" id="role" onChange={this.onInputChange}>
                            <option value="">------</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-pill" value="Sign up"
                               onClick={this.onFormSubmit}/>
                    </div>

                </form>

            </div>
        )
    }
}

export default SignUpForm;