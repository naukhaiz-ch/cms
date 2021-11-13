import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Link } from 'react-router-dom';
import Sidebar from './components/docDash/Sidebar';
import { getAppointments, changeAppointmentStatus, updateAppointment } from '../actions/Appointment';
import { getAllUsers } from './../actions/Users';


const Appointments = () => {
    const dispatch = useDispatch()
    const localUser = JSON.parse(localStorage.getItem('profile'))
    const appointments = useSelector((state) => state.appointments)
    const users = useSelector((state) => state.users)
    const id = localUser?.result?._id

    useEffect(() => {
        dispatch(getAppointments())
        dispatch(getAllUsers())
    }, dispatch)

    const [appointmentDescription, setAppointmentDescription] = useState({
        description: ''
    })

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
                                                <h3><a href="patient-profile.html">{users.map((user) => (
                                                    user._id === appointment.patientId && (user.name)
                                                ))}</a></h3>
                                                <div class="patient-details">
                                                    <h5>
                                                        <i class="far fa-clock"></i>{appointment.appointmentTime}
                                                    </h5>
                                                    <h5>
                                                        <i class="far fa-calendar"></i>{appointment.appointmentDate}
                                                    </h5>
                                                    <h5>
                                                        <i class="fas fa-envelope">{users.map((user) => (
                                                            user._id === appointment.patientId && (user.email)
                                                        ))}</i>
                                                    </h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="appointment-action">
                                            {appointment.appointmentStatus === 'active' ?
                                                <div>
                                                    <button type="button" className="btn btn-danger submit-btn" onClick={() => dispatch(changeAppointmentStatus(appointment._id))} data-toggle="modal" data-target={`#appt_details${appointment._id}`} >
                                                        <i class="fas fa-times"></i> Cancel
                                                    </button>
                                                    <button type="button" className="btn btn-primary submit-btn ml-5">
                                                        <Link className="apt-btn" to={{
                                                            pathname: '/video-call',
                                                            state: {
                                                                patientId: appointment.patientId
                                                            }
                                                        }}>
                                                            Receive Call
                                                        </Link>
                                                    </button>
                                                </div> :
                                                <button type="button" className="btn btn-primary submit-btn" onClick={() => dispatch(changeAppointmentStatus(appointment._id))}>
                                                    <i class="fas fa-check"></i> Accept
                                                </button>
                                            }

                                        </div>
                                        <div>

                                        </div>

                                        <div>
                                            <div class="modal fade custom-modal" id={`appt_details${appointment._id}`}>
                                                <div class="modal-dialog modal-dialog-centered">
                                                    <div class="modal-content">
                                                        <div class="modal-header">
                                                            <h5 class="modal-title">Cancelation Details</h5>
                                                            <button
                                                                type="button"
                                                                class="close"
                                                                data-dismiss="modal"
                                                                aria-label="Close"
                                                            >
                                                                <span aria-hidden="true">&times;</span>
                                                            </button>
                                                        </div>
                                                        <div class="modal-body">
                                                            <label>Reason Of cancelation</label>
                                                            <textarea rows="6" cols="60" onChange={(e) => setAppointmentDescription({ ...appointmentDescription, description: e.target.value })}></textarea>
                                                            <button className="btn btn-primary submit-btn" onClick={() => dispatch(updateAppointment(appointment._id, appointmentDescription))}>
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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
