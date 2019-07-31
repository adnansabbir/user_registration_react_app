import React, {Component} from 'react';
import NavBar from "../../components/nav-bar/nav-bar.component";
import EditProfileForm from "../../components/edit-profile-form/edit-profile-form.component";

class EditProfile extends Component {
    render() {
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
                                        <div className="card-header bg-dark text-white"><h2>Edit Profile</h2></div>
                                        <div className="card-body">
                                            <div className="row align-items-center">
                                                <EditProfileForm/>
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
    }
}


export default EditProfile;