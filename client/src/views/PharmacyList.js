import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FileBase from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../actions/Users';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { createPrescription } from '../actions/Prescription'


const PharmacyList = () => {
    const userRole = 'Pharmacy'
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    const localUser = JSON.parse(localStorage.getItem('profile'))

    useEffect(() => {
        dispatch(getUsers(userRole))
    }, dispatch)

    const [pharmacyData, setPharmacyData] = useState({
        pharmacyId: '',
        patientId: localUser?.result?._id,
        quantity: '',
        prescriptionStatus: 'inactive',
        selectedFile: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createPrescription(pharmacyData))
    }

    return (
        <>
            <Navbar />

            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-10 col-lg-9 col-xl-10 offset-1">
                            {users.map((user) => (
                                <div className="card" key={user._id}>
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
                                                <form onSubmit={handleSubmit}>
                                                    <div className="clinic-booking">
                                                        <Link className="view-pro-btn" to="/pharmacy-profile">
                                                            View Details
                                                        </Link>
                                                        <FileBase
                                                            type="file" multiple={false}
                                                            onDone={({ base64 }) => setPharmacyData({ ...pharmacyData, selectedFile: base64, pharmacyId: user._id })}
                                                        />
                                                        <select name="quantity" className="apt-btn" onChange={(e) => setPharmacyData({ ...pharmacyData, quantity: e.target.value })} >
                                                            <option value="select">Select Quantity</option>
                                                            <option value="7">7 Days</option>
                                                            <option value="15">15 Days</option>
                                                            <option value="30">30 Days</option>
                                                        </select>
                                                        <button className="apt-btn" type="submit">
                                                            Get Quotation
                                                        </button>
                                                    </div>
                                                </form>
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

export default PharmacyList
