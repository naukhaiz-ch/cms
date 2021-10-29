import React from 'react'
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <>
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li>
                                <Link to="/dashboard"
                                ><i className="fe fe-home"></i> <span>Dashboard</span></Link>
                            </li>
                            <li>
                                <Link to="/appointments"
                                ><i className="fe fe-layout"></i> <span>Appointments</span></Link>
                            </li>
                            <li>
                                <Link to="/doctors"
                                ><i className="fe fe-user-plus"></i> <span>Doctors</span></Link
                                >
                            </li>
                            <li>
                                <Link to="/patients">
                                    <i className="fe fe-user"></i> <span>Patients</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/laboratories"
                                ><i className="fe fe-vector"></i> <span>Laboratory List</span></Link
                                >
                            </li>
                            <li>
                                <Link to="/pharmacies"
                                ><i className="fe fe-vector"></i> <span>Pharmacy List</span></Link
                                >
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
