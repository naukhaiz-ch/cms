import React from 'react'
import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import Sidebar from './components/pharmDash/Sidebar';

const Laboratory = () => {
    return (
        <>
            <Navbar />

            <div class="breadcrumb-bar">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-12 col-12">
                            <nav aria-label="breadcrumb" class="page-breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Dashboard
                                    </li>
                                </ol>
                            </nav>
                            <h2 class="breadcrumb-title">Dashboard</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <Sidebar />
                        <div class="col-md-7 col-lg-8 col-xl-9">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="card dash-card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-12 col-lg-4">
                                                    <div class="dash-widget dct-border-rht">
                                                        <div class="circle-bar circle-bar1">
                                                            <div class="circle-graph1" data-percent="75">
                                                                <img
                                                                    src="assets/img/icon-01.png"
                                                                    class="img-fluid"
                                                                    alt="patient"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="dash-widget-info">
                                                            <h6>Total Patient</h6>
                                                            <h3>1500</h3>
                                                            <p class="text-muted">Till Today</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 col-lg-4">
                                                    <div class="dash-widget dct-border-rht">
                                                        <div class="circle-bar circle-bar2">
                                                            <div class="circle-graph2" data-percent="65">
                                                                <img
                                                                    src="assets/img/icon-02.png"
                                                                    class="img-fluid"
                                                                    alt="Patient"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="dash-widget-info">
                                                            <h6>Today Patient</h6>
                                                            <h3>160</h3>
                                                            <p class="text-muted">06, Nov 2019</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-md-12 col-lg-4">
                                                    <div class="dash-widget">
                                                        <div class="circle-bar circle-bar3">
                                                            <div class="circle-graph3" data-percent="50">
                                                                <img
                                                                    src="assets/img/icon-03.png"
                                                                    class="img-fluid"
                                                                    alt="Patient"
                                                                />
                                                            </div>
                                                        </div>
                                                        <div class="dash-widget-info">
                                                            <h6>Appoinments</h6>
                                                            <h3>85</h3>
                                                            <p class="text-muted">06, Apr 2019</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <h4 class="mb-4">Test Bookings</h4>
                                    <div class="appointment-tab">
                                        <div class="tab-content">
                                            <div
                                                class="tab-pane show active"
                                                id="upcoming-appointments"
                                            >
                                                <div class="card card-table mb-0">
                                                    <div class="card-body">
                                                        <div class="table-responsive">
                                                            <table
                                                                class="table table-hover table-center mb-0"
                                                            >
                                                                <thead>
                                                                    <tr>
                                                                        <th>Patient Name</th>
                                                                        <th>Appt Date</th>
                                                                        <th>Purpose</th>
                                                                        <th>Type</th>
                                                                        <th class="text-center">Paid Amount</th>
                                                                        <th></th>
                                                                    </tr>
                                                                </thead>
                                                                <tbody>
                                                                    <tr>
                                                                        <td>
                                                                            <h2 class="table-avatar">
                                                                                <Link
                                                                                    to="/laboratory-profile"
                                                                                    class="avatar avatar-sm mr-2"
                                                                                ><img
                                                                                        class="avatar-img rounded-circle"
                                                                                        src="assets/img/patients/patient.jpg"
                                                                                        alt="User pic"
                                                                                    /></Link>
                                                                                <Link to="/laboratorys-list"
                                                                                >Richard Wilson
                                                                                    <span>#PT0016</span></Link
                                                                                >
                                                                            </h2>
                                                                        </td>
                                                                        <td>
                                                                            11 Nov 2019
                                                                            <span class="d-block text-info"
                                                                            >10.00 AM</span
                                                                            >
                                                                        </td>
                                                                        <td>General</td>
                                                                        <td>New Patient</td>
                                                                        <td class="text-center">$150</td>
                                                                    </tr>
                                                                </tbody>
                                                            </table>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Laboratory