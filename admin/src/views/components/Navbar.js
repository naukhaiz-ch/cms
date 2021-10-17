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
        <>
            <div className="header">
                <div className="header-left">
                    <Link to="/dashboard" className="logo">
                        <img src="assets/img/logo.png" alt="Logo" />
                    </Link>
                    <Link to="/dashoard" className="logo logo-small">
                        <img src="assets/img/logo-small.png"
                            alt="Logo" width="30" height="30" />
                    </Link>
                </div>

                <Link to="/dashboard" id="toggle_btn">
                    <i className="fe fe-text-align-left"></i>
                </Link>

                <Link to="/dashboard" className="mobile_btn" id="mobile_btn">
                    <i className="fa fa-bars"></i>
                </Link>

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
                                    <Link to="/Account" className="dropdown-item">
                                        <i className="ni ni-settings-gear-65"></i>
                                        <span>Account</span>
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
                                <Link to="/Auth">
                                    <div className="media align-items-center">
                                        <div className="media-body  ml-2  d-none d-lg-block">
                                            <span className="mb-0 text-sm  font-weight-bold"></span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )}
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navbar