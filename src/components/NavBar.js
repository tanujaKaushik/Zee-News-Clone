import React, { Component } from 'react';
// import { Link } from 'react-router-dom'
import '../Styles/NavBar.css';

export default class NavBar extends Component{
    render(){
        return(
            // <div className='main'>
            <>
            <nav className="navbar navbar-dark bg-dark navbar-expand  pt-n1 ">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav pt-n1">
                        <li className="nav-item">
                        <a className="nav-link text-light " aria-current="page" href="/">हिन्दी</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href="/">English</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light " href="/">मराठी</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href='/'>ਪੰਜਾਬੀ</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light " href='/'>தமிழ்</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href='/'>తెలుగు</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href='/'>ગુજરાતી</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href='/'>ଓଡିଆ</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href='/'>മലയാളം</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href='/'>BUSINESS</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href='/'>TECH</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href='/'>WORLD</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light" href='/'>HEALTH</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>

                    <ul className='list-group list-group-horizontal main'>
                        <li className='list-group-item'>
                            <img className='logo' alt='' src="https://english.cdn.zeenews.com/static/public/zeenewslogo.svg"/>
                        </li>

                        <li className='list-group-item w-100 py-0 px-0'>
                        {/* navbar-1 starts */}
                        <nav className="navbar navbar-expand py-0 shadow mb-2 bg-body border-bottom border-secondary border-opacity-50">
                            <div className="container-fluid">
                                <div>
                                    <ul className="navbar-nav">

                                    {/* <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                           <span className='navabr-toggler-icon'></span>
                                        </a>
                                        
                                        <ul className="dropdown-menu w-100">
                                            <li><a className="dropdown-item" href="/">Action</a></li>
                                            <li><a className="dropdown-item" href="/">Another action</a></li>
                                            <li><hr className="dropdown-divider"/></li>
                                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                                        </ul>
                                    </li> */}

                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <span className="navbar-toggler-icon"></span>
                                        </a>
                                        <ul className="dropdown-menu w-100">
                                            <li><a className="dropdown-item" href="/">Action</a></li>
                                            <li><a className="dropdown-item" href="/">Another action</a></li>
                                            <li><a className="dropdown-item" href="/">Something else here</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item border-start border-end border-secondary border-opacity-50 px-4 py-1">
                                    <a className="nav-link text-dark" aria-current="page" href="/">NEWS</a>
                                    </li>
                                    <li className="nav-item border-end border-secondary border-opacity-50 px-4 py-1">
                                    <a className="nav-link" href="/">COVID-19</a>
                                    </li>
                                    <li className="nav-item border-end border-secondary border-opacity-50 px-4 py-1">
                                    <a className="nav-link" href="/">VIDEOS</a>
                                    </li>
                                    <li className="nav-item border-end border-secondary border-opacity-50 px-4 py-1">
                                    <a className="nav-link" href='/'>PHOTOS</a>
                                    </li>
                                </ul>
                                </div>

                            </div>
                        </nav>

                        <nav className="navbar navbar-expand py-0">
                            <div className="container-fluid">
                                <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <a className="nav-link fw-semibold text-dark l-size" href="/">LIVE TV</a>
                                    </li> 
                                    <li className="nav-ite fw-boldm">
                                    <a className="nav-link fw-semibold text-dark l-size" href="/">LATEST NEWS</a>
                                    </li>
                                    <li className="nav-ite fw-boldm">
                                    <a className="nav-link fw-semibold text-dark l-size" href="/">INDIA</a>
                                    </li> 
                                    <li className="nav-ite fw-boldm">
                                    <a className="nav-link fw-semibold text-dark l-size" href='/'>MY MONEY</a>
                                    </li> 
                                    <li className="nav-ite fw-boldm">
                                    <a className="nav-link fw-semibold text-dark l-size" href='/'>ENTERTAINMENT</a>
                                    </li> 
                                    <li className="nav-ite fw-boldm">
                                    <a className="nav-link fw-semibold text-dark l-size" href='/'>SPORTS</a>
                                    </li> 
                                    <li className="nav-ite fw-boldm">
                                    <a className="nav-link fw-semibold text-dark l-size" href='/'>LIFESTYLE</a>
                                    </li> 
                                    <li className="nav-ite fw-boldm">
                                    <a className="nav-link fw-semibold text-dark l-size" href='/'>BUSINESS</a>
                                    </li>
                                    <li className="nav-ite fw-boldm">
                                    <a className="nav-link fw-semibold text-dark l-size" href='/'>WORLD</a>
                                    </li> 
                                    <li className="nav-ite fw-boldm">
                                    <a className="nav-link fw-semibold text-dark l-size" href='/'>MOBILITY</a>
                                    </li> 
                                    <li className="nav-ite fw-boldm">
                                    <a className="nav-link fw-semibold text-dark l-size" href='/'>VIRAL NEWS</a>
                                    </li> 
                                    <li className="nav-ite fw-boldm">
                                    <a className="nav-link fw-semibold text-dark l-size" href='/'>HEALTH CARE</a>
                                    </li>
                                </ul>
                                </div>
                            </div>
                        </nav>
                        </li>                    
                    </ul>
                 {/* </div> */}
                </>
        )
    }
}