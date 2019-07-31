import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';
class EditProfileForm extends Component {
    constructor({history}) {
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
            logged_in_user: {},
            history:history
        }
    }

    onInputChange = (event) => {
        this.setState({
            [event.target.id]: event.target.value
        });

    };

    onFormSubmit = (event) => {
        event.preventDefault();

        if (this.state.full_name && this.state.date_of_birth && this.state.email) {

            const user = this.state.users.find((u, index)=>{
                if (u.email === this.state.logged_in_user.email){
                    this.state.users[index].name=this.state.full_name;
                    this.state.users[index].date_of_birth=this.state.date_of_birth;
                    this.state.users[index].email=this.state.email;
                    return u;
                }
            });

            this.setState({
                form_error: "",
                success_message: "Updated Successfully",
            });

            localStorage.setItem('users', JSON.stringify(this.state.users));
            if (user) {
            localStorage.setItem('logged_in_user', JSON.stringify(user));
            }

            this.state.history.push('/profile');
        } else {
            this.setState({
                form_error: "There are errors in the form",
                success_message: ""
            })
        }


    };

    componentDidMount() {
        const local_storage_user_data = JSON.parse(localStorage.getItem('users'));
        const logged_in_user = JSON.parse(localStorage.getItem('logged_in_user'));
        this.setState({
            users: local_storage_user_data ? local_storage_user_data : [],
            logged_in_user: logged_in_user ? logged_in_user : {},

            full_name: logged_in_user ? logged_in_user.name : {},
            date_of_birth: logged_in_user ? logged_in_user.date_of_birth : {},
            email: logged_in_user ? logged_in_user.email : {},
        })
    }

    render() {
        return (
            <div className="col-lg-12 ml-auto" data-aos="fade-up" data-aos-delay="500">
                <form action="" method="post" className="form-box">
                    <p className="text-danger">{this.state.form_error}</p>
                    <p className="text-success">{this.state.success_message}</p>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Full Name" id='full_name'
                               onChange={this.onInputChange} required="required" value={this.state.full_name}/>
                    </div>

                    <div className="form-group text-left">
                        <label htmlFor="date_of_birth">Data of Birth</label>
                        <input type="date" id="date_of_birth" className="form-control" onChange={this.onInputChange}
                               required="required" value={this.state.date_of_birth}/>
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Addresss" id='email'
                               onChange={this.onInputChange} required="required" value={this.state.email}/>
                    </div>

                    <div className="form-group">
                        <input type="submit" className="btn btn-primary btn-pill" value="Save"
                               onClick={this.onFormSubmit}/>
                    </div>

                </form>

            </div>
        )
    }
}

export default withRouter(EditProfileForm);