import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../actions/Users';
import Footer from './components/Footer';

const DocList = () => {
    const userRole = 'Doctor'
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    const localUser = JSON.parse(localStorage.getItem('profile'))

    const [appointmentData, setAppointmentData] = useState({
        doctorId: '',
        patientId: '',
        totalBill: '',
        appointmentTime: '',
        appointmentDate: '',
        appointmentStatus: 'inactive',
        description: 'null'
    })

    useEffect(() => {
        dispatch(getUsers(userRole))
    }, dispatch)

    return (
        <>
            <Navbar />

            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 col-lg-9 col-xl-10 offset-1">
                            {users.map((user) => (
                                user.userStatus === 'active' &&
                                (
                                    <div className="card">
                                        <div className="card-body">
                                            <div className="doctor-widget">
                                                <div className="doc-info-left">
                                                    <div className="doctor-img">
                                                        <Link className="apt-btn" to={{
                                                            pathname: '/user-profile', state: { userId: user._id }
                                                        }}>
                                                            <img
                                                                src={user.selectedFile}
                                                                className="img-fluid"
                                                                alt="UserImage"
                                                            />
                                                        </Link>
                                                    </div>
                                                    <div className="doc-info-cont">
                                                        <h4 className="doc-name">
                                                            <Link to={{
                                                                pathname: '/user-profile', state: { userId: user._id }
                                                            }}>
                                                                {user.name}
                                                            </Link>
                                                        </h4>
                                                        <p className="doc-speciality">
                                                            {user.speciality}
                                                        </p>
                                                        <p className="doc-location">
                                                            {user.email}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="doc-info-right">
                                                    <div className="clini-infos">
                                                        <ul>
                                                            <li>
                                                                <i className="far fa-money-bill-alt"></i>{user.credits}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="clinic-booking">
                                                        <Link className="view-pro-btn" to={{
                                                            pathname: '/user-profile', state: { userId: user._id }
                                                        }}>
                                                            View Profile
                                                        </Link>
                                                        <input type="date" className="apt-btn" name="date" onChange={(e) => setAppointmentData({ ...appointmentData, appointmentDate: e.target.value })} />
                                                        <input type="time" className="apt-btn" name="time" onChange={(e) => setAppointmentData({ ...appointmentData, appointmentTime: e.target.value })} />
                                                        {!localUser?.result?.name ?
                                                            <button className="apt-btn" onClick={() => alert('Please Login to Continue !')}>
                                                                Book Appointment
                                                            </button>
                                                            :
                                                            <Link className="apt-btn" to={{
                                                                pathname: '/checkout',
                                                                state: {
                                                                    checkoutType: 'docAppointment',
                                                                    totalBill: user.credits,
                                                                    patientId: localUser?.result?._id,
                                                                    doctorId: user._id,
                                                                    appointmentTime: appointmentData.appointmentTime,
                                                                    appointmentDate: appointmentData.appointmentDate,
                                                                    appointmentStatus: appointmentData.appointmentStatus,
                                                                    description: appointmentData.description
                                                                }
                                                            }}>
                                                                Book Appointment
                                                            </Link>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default DocList
