import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAppointments } from '../../../actions/Appointment';


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
            <div class="content">
                <div class="container-fluid">
                    <div class="row">
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
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appointments
