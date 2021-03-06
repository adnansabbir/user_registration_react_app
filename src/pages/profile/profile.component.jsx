import React, {Component} from 'react';
import NavBar from "../../components/nav-bar/nav-bar.component";


const Profile = ({history}) => {
    const logged_in_user = JSON.parse(localStorage.getItem('logged_in_user'));
    if (!logged_in_user.name){
        return <h1>404 Error</h1>
    }

    return (
        <div>
            <NavBar/>
            <div className="intro-section" id="home-section">

                <div className="slide-1"
                     data-stellar-background-ratio="0.5">
                    <div className="container pt-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="card mt-4 text-center">
                                    <div className="card-header bg-dark text-white"><h2>My Profile</h2></div>
                                    <div className="card-body">
                                        <div className="row align-items-center">
                                            <div className="col-6">
                                                <div className="row text-left">
                                                    <div className="col-6">Name: </div>
                                                    <div className="col-6">{logged_in_user.name} </div>
                                                </div>
                                                <div className="row text-left">
                                                    <div className="col-6">Date of Birth: </div>
                                                    <div className="col-6">{logged_in_user.date_of_birth} </div>
                                                </div>
                                                <div className="row text-left">
                                                    <div className="col-6">Email: </div>
                                                    <div className="col-6">{logged_in_user.email} </div>
                                                </div>
                                                <div className="row text-left">
                                                    <div className="col-6">Role: </div>
                                                    <div className="col-6">{logged_in_user.role} </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;