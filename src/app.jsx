import React, {Component} from 'react';
import HomePage from './pages/homepage/homepage.component';
import Dashboard from './pages/dashboard/dashboard.component';
import Profile from './pages/profile/profile.component';
import EditProfile from './pages/edit_profile/edit_profile.component';
import {HashRouter, Switch, Route} from 'react-router-dom';


class App extends Component {
    constructor() {
        super();

        this.state = {
            logged_in_user: {}
        }
    }

    render() {
        return (
            <div>
                <HashRouter basename='/'>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/dashboard' component={Dashboard}/>
                    <Route exact path='/profile' component={Profile}/>
                    <Route exact path='/edit' component={EditProfile}/>
                </HashRouter>
            </div>
        )
    }
}


export default App;
