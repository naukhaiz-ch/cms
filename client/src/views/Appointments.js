import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import Sidebar from './components/docDash/Sidebar';
import { getAppointments, changeAppointmentStatus } from '../actions/Appointment';


const Appointments = () => {
    const dispatch = useDispatch()
    const localUser = JSON.parse(localStorage.getItem('profile'))
    const appointments = useSelector((state) => state.appointments)
    const id = localUser?.result?._id

    useEffect(() => {
        dispatch(getAppointments())
    }, dispatch)

    return (
        <>
            <Navbar />

            <div class="breadcrumb-bar">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-12 col-12">
                            <nav aria-label="breadcrumb" class="page-breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Appointments
                                    </li>
                                </ol>
                            </nav>
                            <h2 class="breadcrumb-title">Appointments</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <Sidebar />
                        <div class="col-md-7 col-lg-8 col-xl-9">
                            <div class="appointments">
                                {appointments.map((appointment) => (
                                    <div class="appointment-list" key={appointment._id}>
                                        <div class="profile-info-widget">
                                            <a href="patient-profile.html" class="booking-doc-img">
                                                <img
                                                    src="assets/img/patients/patient.jpg"
                                                    alt="User pic"
                                                />
                                            </a>
                                            <div class="profile-det-info">
                                                <h3><a href="patient-profile.html">{appointment.patientId}</a></h3>
                                                <div class="patient-details">
                                                    <h5>
                                                        <i class="far fa-clock"></i>{appointment.appointmentTime}
                                                    </h5>
                                                    <h5>
                                                        <i class="far fa-calendar"></i>{appointment.appointmentDate}
                                                    </h5>
                                                    <h5>
                                                        <i class="fas fa-envelope"></i>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="appointment-action">
                                            {appointment.appointmentStatus === 'active' ?
                                                <button type="button" className="btn btn-primary submit-btn" onClick={() => dispatch(changeAppointmentStatus(appointment._id))}>
                                                    <i class="fas fa-times"></i> Cancel
                                                </button> :
                                                <button type="button" className="btn btn-primary submit-btn" onClick={() => dispatch(changeAppointmentStatus(appointment._id))}>
                                                    <i class="fas fa-check"></i> Accept
                                                </button>
                                            }
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Appointments
