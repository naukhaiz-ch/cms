import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [user] = useState(JSON.parse(localStorage.getItem('profile')))
    return (
        <>
            <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                <div class="profile-sidebar">
                    <div class="widget-profile pro-widget-content">
                        <div class="profile-info-widget">
                            <Link to="/lab-profile" class="booking-doc-img">
                                <img
                                    src="assets/img/doctors/doctor-thumb-02.jpg"
                                    alt="User pic"
                                />
                            </Link>
                            <div class="profile-det-info">
                                <h3>{user?.result?.name}</h3>
                                <div class="patient-details">
                                    <h5 class="mb-0">
                                        {user?.result?.location}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="dashboard-widget">
                        <nav class="dashboard-menu">
                            <ul>
                                <li>
                                    <Link to={`/${user?.result?.userRole}`}>
                                        <i class="fas fa-columns"></i>
                                        <span>Dashboard</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/pharmacy-orders">
                                        <i class="fas fa-calendar-check"></i>
                                        <span>Qoutations</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/">
                                        <i class="fas fa-file-invoice"></i>
                                        <span>Orders</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="doctor-profile-settings.html">
                                        <i class="fas fa-user-cog"></i>
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
