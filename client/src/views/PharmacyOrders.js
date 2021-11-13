import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/pharmDash/Sidebar';
import { getPrescriptions, changePrescriptionStatus } from '../actions/Prescription';
import { getAllUsers } from './../actions/Users';

const PharmacyOrders = () => {
    const dispatch = useDispatch()
    const localUser = JSON.parse(localStorage.getItem('profile'))
    const prescriptions = useSelector((state) => state.prescriptions)
    const users = useSelector((state) => state.users)
    const id = localUser?.result?._id

    useEffect(() => {
        dispatch(getPrescriptions())
        dispatch(getAllUsers())
    }, dispatch)

    return (
        <>
            <Navbar />

            <div className="breadcrumb-bar">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-md-12 col-12">
                            <nav aria-label="breadcrumb" className="page-breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Orders
                                    </li>
                                </ol>
                            </nav>
                            <h2 className="breadcrumb-title">Orders</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <Sidebar />
                        <div className="col-md-7 col-lg-8 col-xl-9">
                            <div className="card card-table">
                                <div className="card-body">
                                    <div className="prescriptions">
                                        <div className="table-responsive">
                                            <table className="table table-hover table-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Product</th>
                                                        <th>Patient Name</th>
                                                        <th>Quantity</th>
                                                        <th>Status</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                                {prescriptions.map((prescription) => (
                                                    id === prescription.pharmacyId && (
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <h2 className="table-avatar">
                                                                        <p className="avatar avatar-sm mr-2">
                                                                            <img className="avatar-img" src={prescription.selectedFile} alt="User pic" data-toggle="modal" data-target="#appt_details" />
                                                                        </p>
                                                                        <a href={prescription.selectedFile} download className="fa fa-download ml-3"></a>
                                                                    </h2>
                                                                </td>
                                                                <td>{users.map((user) => (
                                                                    user._id === prescription.patientId && (user.name)
                                                                ))}</td>
                                                                <td>{prescription.quantity}</td>
                                                                <td>{prescription.prescriptionStatus}</td>
                                                                <td>{prescription.prescriptionStatus === 'active' ?
                                                                    <button type="button" className="btn btn-danger submit-btn" onClick={() => dispatch(changePrescriptionStatus(prescription._id))}>
                                                                        <i className="fas fa-times"></i> Cancel
                                                                    </button> :
                                                                    <button type="button" className="btn btn-primary submit-btn" onClick={() => dispatch(changePrescriptionStatus(prescription._id))}>
                                                                        <i className="fas fa-check"></i> Accept
                                                                    </button>
                                                                }</td>
                                                            </tr>
                                                        </tbody>
                                                    )))}
                                            </table>
                                            {prescriptions.map((prescription) => (
                                                <div className="modal fade custom-modal" id="appt_details">
                                                    <div className="modal-dialog modal-dialog-centered">
                                                        <div className="modal-content">
                                                            <div className="modal-body">
                                                                <img className="avatar-img" src={prescription.selectedFile} alt="User pic" width="455px" height="455px" />
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
                    </div>
                </div>
            </div >

            <Footer />
        </>
    )
}

export default PharmacyOrders
