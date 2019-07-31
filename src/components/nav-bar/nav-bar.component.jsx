import React from 'react';

export default function NavBar() {
    return (
        <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">

            <div className="container-fluid">
                <div className="d-flex align-items-center">
                    <div className="site-logo mr-auto w-25"><a href="/">Tech Academy</a></div>

                    {/*<div className="mx-auto text-center">*/}
                        {/*<nav className="site-navigation position-relative text-right" role="navigation">*/}
                            {/*<ul className="site-menu main-menu js-clone-nav mx-auto d-none d-lg-block  m-0 p-0">*/}
                                {/*<li><a href="#home-section" className="nav-link">Home</a></li>*/}
                                {/*<li><a href="#courses-section" className="nav-link">Courses</a></li>*/}
                                {/*<li><a href="#programs-section" className="nav-link">Programs</a></li>*/}
                                {/*<li><a href="#teachers-section" className="nav-link">Teachers</a></li>*/}
                            {/*</ul>*/}
                        {/*</nav>*/}
                    {/*</div>*/}

                    <div className="ml-auto w-25">
                        <nav className="site-navigation position-relative text-right" role="navigation">
                            <ul className="site-menu main-menu site-menu-dark js-clone-nav mr-auto d-none d-lg-block m-0 p-0">
                                <li className="cta"><a href="/"
                                                       className="nav-link"><span>Contact Us</span></a></li>
                            </ul>
                        </nav>
                        <a href="#"
                           className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle text-black float-right"><span
                            className="icon-menu h3"></span></a>
                    </div>
                </div>
            </div>

        </header>
    );
}