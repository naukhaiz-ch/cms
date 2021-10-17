import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../actions/Users';
import Footer from './components/Footer';

const LaboratoryList = () => {
    const userRole = 'Laboratory'
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    const localUser = JSON.parse(localStorage.getItem('profile'))

    const [testData, setTestData] = useState({
        time: '',
        date: '',
        testName: ''
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
                                                <div className="doctor-img1">
                                                    <Link to="/lab-profile">
                                                        <img
                                                            src="assets/img/medical-img1.jpg"
                                                            className="img-fluid"
                                                            alt="User"
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="doc-info-cont">
                                                    <h4 className="doc-name mb-2">
                                                        <Link to="/lab-profile">{user.name}</Link>
                                                    </h4>

                                                    <div className="clinic-details">
                                                        <div className="clini-infos pt-3">
                                                            <p className="doc-location mb-2">
                                                                <i className="fas fa-phone-volume mr-1"></i>
                                                                {user.phoneNo}
                                                            </p>
                                                            <p className="doc-location mb-2 text-ellipse">
                                                                <i className="fas fa-map-marker-alt mr-1"></i>
                                                                {user.address}
                                                            </p>
                                                            <p className="doc-location mb-2">
                                                                <i className="fas fa-chevron-right mr-1"></i> Opens at
                                                                08.00 AM
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="doc-info-right">
                                                <div className="clinic-booking">
                                                    <Link className="view-pro-btn" to="/lab-profile"
                                                    >View Details</Link>
                                                    <input type="date" className="apt-btn" name="date" onChange={(e) => setTestData({ ...testData, date: e.target.value })} />
                                                    <input type="time" className="apt-btn" name="time" onChange={(e) => setTestData({ ...testData, time: e.target.value })} />
                                                    <select name="test" id="test" className="apt-btn" onChange={(e) => setTestData({ ...testData, testName: e.target.value })} >
                                                        <option value="select">Select Test </option>
                                                        <option value="cbc">CBC</option>
                                                        <option value="lft">LFT</option>
                                                        <option value="xray">X-Ray</option>
                                                    </select>
                                                    <Link className="apt-btn" to={{
                                                        pathname: '/checkout',
                                                        state: {
                                                            totalBill: '1000',
                                                            patientId: localUser?.result?._id,
                                                            labId: user._id,
                                                            testTime: testData.time,
                                                            testDate: testData.date,
                                                            testName: testData.testName
                                                        }
                                                    }}>
                                                        Proceed Booking
                                                    </Link>
                                                    {/* <button onClick={() => alert(JSON.stringify(testData))}>Booking</button> */}
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

export default LaboratoryList
