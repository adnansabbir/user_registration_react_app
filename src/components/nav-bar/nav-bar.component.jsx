import React, {Component} from 'react';
import { withRouter} from 'react-router-dom';

const NavBarDropDown = ({user, logout, history}) => {
    if (user.name) {
        return (
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
                   data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false">
                    Hi {user.name}
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" onClick={()=>history.push('/profile')}>Profile</a>
                    <a className="dropdown-item" onClick={()=>history.push('/edit')}>Edit Profile</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" onClick={logout} href='/'>Logout</a>
                </div>
            </li>
        )
    } else return <div></div>
};

class NavBar extends Component {
    constructor({history}){
        super();

        this.state={
            user:{},
            history:history
        }
    }

    componentDidMount() {
        const logged_in_user = JSON.parse(localStorage.getItem('logged_in_user'));
        this.setState({
           user: logged_in_user? logged_in_user:''
        });
    }

    logout = ()=>{
        localStorage.setItem('logged_in_user', JSON.stringify({}));
        this.setState({user:{}});
        this.state.history.push('/');
    };

    render() {
        return (
            <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">

                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <div className="site-logo mr-auto w-25"><a onClick={()=>this.state.history.push('/')}>Geeks Club</a></div>

                        <div className="ml-auto w-25">
                            <nav className="site-navigation position-relative text-right" role="navigation">
                                <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block m-0 p-0">
                                    <NavBarDropDown user={this.state.user} logout={this.logout} history={this.state.history}/>
                                </ul>
                            </nav>
                            <a href="#"
                               className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right"><span
                                className="icon-menu h3"></span></a>
                        </div>
                    </div>
                </div>

            </header>
        )
    }
}

export default withRouter(NavBar);