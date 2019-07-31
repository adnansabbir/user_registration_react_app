import React, {Component} from 'react';
import NavBar from '../../components/nav-bar/nav-bar.component';
import './homepage.style.css';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import LogInForm from '../../components/log-in-form/log-in-form.component';
import Button from '../../components/button/button.component';

class HomePage extends Component {
    constructor() {
        super();

        this.state = {
            'show_sign_up_form': false,
            'show_login_form': false
        }
    }

    showSignUpForm = () => {
        this.setState({
            'show_sign_up_form': true,
            'show_login_form': false,
        })
    };

    showLogInForm = () => {
        this.setState({
            'show_sign_up_form': false,
            'show_login_form': true,
        })
    };

    componentDidMount() {
        console.log("This is Triggered");
    }

    render() {
        return (
            <div>
                <NavBar/>
                <div className="intro-section" id="home-section">

                    <div className="slide-1"
                         data-stellar-background-ratio="0.5">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 mb-4">
                                            <h1 data-aos="fade-up" data-aos-delay="100">Join The Geeks Club</h1>
                                            <p className="mb-4" data-aos="fade-up" data-aos-delay="200">Lorem ipsum
                                                dolor
                                                sit
                                                amet
                                                consectetur adipisicing elit. Maxime ipsa nulla sed quis rerum amet
                                                natus
                                                quas
                                                necessitatibus.</p>
                                            <Button name={"Join Us"} color={'btn-primary'}
                                                    action={this.showSignUpForm}/>
                                            <Button name={"Log In"} color={'btn-success'} action={this.showLogInForm}/>

                                        </div>

                                        {this.state.show_sign_up_form && <SignUpForm/>}
                                        {this.state.show_login_form && <LogInForm/>}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default HomePage;