import React, {Component} from 'react';
import HomePage from './pages/homepage/homepage.component';
import Dashboard from './pages/dashboard/dashboard.component';
import {Switch, Route} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={HomePage}/>
                    <Route exact path='/dashboard' component={Dashboard}/>
                </Switch>
            </div>
        )
    }
}


export default App;
