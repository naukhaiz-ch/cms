import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [user] = useState(JSON.parse(localStorage.getItem('profile')))
    return (
        <>
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <div className="profile-sidebar">
                    <div className="widget-profile pro-widget-content">
                        <div className="profile-info-widget">
                            <Link to="/lab-profile" className="booking-doc-img">
                                <img
                                    src="assets/img/doctors/doctor-thumb-02.jpg"
                                    alt="User pic"
                                />
                            </Link>
                            <div className="profile-det-info">
                                <h3>{user.result.name}</h3>
                                <div className="patient-details">
                                    <h5 className="mb-0">
                                        {user.result.location}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dashboard-widget">
                        <nav className="dashboard-menu">
                            <ul>
                                <li>
                                    <Link to={`/${user?.result?.userRole}`}>
                                        <i className="fas fa-columns"></i>
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/laboratory-orders">
                                        <i className="fas fa-calendar"></i>
                                        <span>Test Bookings</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/edit-profile">
                                        <i className="fas fa-user-cog"></i>
                                        <span>Profile Settings</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Sidebar
