import React, {Component} from 'react';
import NavBar from "../../components/nav-bar/nav-bar.component";


const Dashboard = () => {
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
                                    <div className="card-header bg-dark text-white"><h2>Dashboard</h2></div>
                                    <div className="card-body">
                                        Dashboard is under construction
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

export default Dashboard;