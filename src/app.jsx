import React, {Component} from 'react';
import HomePage from './pages/homepage/homepage.component';
import Dashboard from './pages/dashboard/dashboard.component';
import {Switch, Route} from 'react-router-dom';


class App extends Component {
    constructor(){
        super();

        this.state={
            logged_in_user:{}
        }
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/dashboard' component={Dashboard}/>
                    <Route exact path='/profile' component={Dashboard}/>
                </Switch>
            </div>
        )
    }
}


export default App;
