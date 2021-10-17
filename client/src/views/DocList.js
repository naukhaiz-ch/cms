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

    const [timeAndDate, setTimeAndDate] = useState({
        time: '',
        date: ''
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
                                <div className="card">
                                    <div className="card-body">
                                        <div className="doctor-widget">
                                            <div className="doc-info-left">
                                                <div className="doctor-img">
                                                    <Link to="/doc-profile">
                                                        <img
                                                            src="assets/img/doctors/doctor-thumb-01.jpg"
                                                            className="img-fluid"
                                                            alt="UserImage"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="doc-info-cont">
                                                    <h4 className="doc-name">
                                                        <Link to="/doc-profile">{user.name}</Link>
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
                                                    <Link className="view-pro-btn" to="/doc-profile"
                                                    >View Profile</Link>
                                                    <input type="date" className="apt-btn" name="date" onChange={(e) => setTimeAndDate({ ...timeAndDate, date: e.target.value })} />
                                                    <input type="time" className="apt-btn" name="time" onChange={(e) => setTimeAndDate({ ...timeAndDate, time: e.target.value })} />
                                                    <Link className="apt-btn" to={{
                                                        pathname: '/checkout',
                                                        state: {
                                                            totalBill: user.credits,
                                                            patientId: localUser?.result?._id,
                                                            doctorId: user._id,
                                                            appointmentTime: timeAndDate.time,
                                                            appointmentDate: timeAndDate.date
                                                        }
                                                    }}>
                                                        Book Appointment
                                                    </Link>
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

            <Footer />
        </>
    )
}

export default DocList