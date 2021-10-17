import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { LOGOUT } from '../../constants/actionTypes'
import decode from 'jwt-decode'

const Navbar = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const location = useLocation()
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))

    const logout = () => {
        dispatch({
            type: LOGOUT
        })
        history.push('/')
        setUser(null)
    }

    useEffect(() => {
        const token = user?.token

        if (token) {
            const decodeToken = decode(token)

            if (decodeToken.exp * 1000 < new Date().getTime()) logout()
        }

        setUser(JSON.parse(localStorage.getItem('profile')))

    }, [location])


    return (
        <div>
            <header className="header">
                <nav className="navbar navbar-expand-lg header-">
                    <div className="navbar-header">
                        <Link id="mobile_btn" to="">
                            <span className="bar-icon">
                                <span></span>
                                <span></span>
                                <span></span>
                            </span>
                        </Link>
                        <Link to="/" className="navbar-brand logo">
                            <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
                        </Link>
                    </div>
                    <div className="main-menu-wrapper">
                        <div className="menu-header">
                            <Link to="/home" className="menu-logo">
                                <img src="assets/img/logo.png" className="img-fluid" alt="Logo" />
                            </Link>
                            <Link id="menu_close" className="menu-close" to='/'>
                                <i className="fas fa-times"></i>
                            </Link>
                        </div>
                        <ul className="main-nav">
                            <li className="has-submenu">
                                <Link to="/doc-list">Doctors</Link>
                            </li>
                            <li className="has-submenu">
                                <Link to="/laboratory-list">Laboratories</Link>
                            </li>
                            <li className="has-submenu">
                                <Link to="/pharmacy-list">Pharmacies</Link>
                            </li>
                            <li className="has-submenu">
                                <Link to="/about-us">About Us</Link>
                            </li>
                            <li className="has-submenu">
                                <Link to="/contact-us">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <ul className="nav header-navbar-rht">
                        <li className="nav-item contact-item">
                            <div className="header-contact-img">
                                <i className="fas fa-phone-alt"></i>
                            </div>
                            <div className="header-contact-detail">
                                <p className="contact-info-header">+92 308 4800652 &nbsp; &nbsp;</p>
                            </div>
                        </li>
                    </ul>
                    <ul className="nav user-menu">
                        <li className="nav-item">
                            {user ? (
                                <div>
                                    <a className="nav-link pr-0" href="null" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <div className="media align-items-center">
                                            <div className="media-body  ml-2  d-none d-lg-block">
                                                <span className="mb-0 text-sm  font-weight-bold">Welcome, {user.result.name} &nbsp;</span>
                                            </div>
                                            <span className="avatar avatar-sm rounded-circle">
                                                {
                                                    user.result.imageUrl ? (
                                                        <img alt="placeholder" src={user.result.imageUrl} />
                                                    ) : (
                                                        <h1>{user.result.name.charAt(0)}</h1>
                                                    )
                                                }
                                            </span>
                                        </div>
                                    </a>
                                    <div className="dropdown-menu  dropdown-menu-right ">
                                        <Link to={`/${user?.result?.userRole}`} className="dropdown-item">
                                            <i className="ni ni-settings-gear-65"></i>
                                            <span>Dashboard</span>
                                        </Link>
                                        <div className="dropdown-divider"></div>
                                        <button onClick={logout} className="dropdown-item">
                                            <i className="ni ni-user-run"></i>
                                            <span>Logout</span>
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <ul className="nav header-navbar-rht">
                                        <li class="nav-item">
                                            <Link class="nav-link header-login" to="/auth"
                                            >login / Signup
                                            </Link>
                                        </li>
                                    </ul>

                                </div>
                            )}
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Navbar