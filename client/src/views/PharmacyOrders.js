import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/pharmDash/Sidebar';
import { getPrescriptions, changePrescriptionStatus } from '../actions/Prescription';

const PharmacyOrders = () => {
    const dispatch = useDispatch()
    const localUser = JSON.parse(localStorage.getItem('profile'))
    const prescriptions = useSelector((state) => state.prescriptions)
    const id = localUser?.result?._id

    useEffect(() => {
        dispatch(getPrescriptions())
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
                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Orders
                                    </li>
                                </ol>
                            </nav>
                            <h2 class="breadcrumb-title">Orders</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <Sidebar />
                        <div class="col-md-7 col-lg-8 col-xl-9">
                            <div class="card card-table">
                                <div class="card-body">
                                    <div class="prescriptions">
                                        <div class="table-responsive">
                                            <table class="table table-hover table-center mb-0">
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
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <h2 class="table-avatar">
                                                                    <p href=""
                                                                        class="avatar avatar-sm mr-2">
                                                                        <img
                                                                            class="avatar-img"
                                                                            src={prescription.selectedFile}
                                                                            alt="User pic"
                                                                        />
                                                                    </p>
                                                                    <a href={prescription.selectedFile} download class="fas fa-download"></a>
                                                                </h2>
                                                            </td>
                                                            <td>{prescription.patientId}</td>
                                                            <td>{prescription.quantity}</td>
                                                            <td>{prescription.prescriptionStatus}</td>
                                                            <td>{prescription.prescriptionStatus === 'active' ?
                                                                <button type="button" className="btn btn-primary submit-btn" onClick={() => dispatch(changePrescriptionStatus(prescription._id))}>
                                                                    <i class="fas fa-times"></i> Cancel
                                                                </button> :
                                                                <button type="button" className="btn btn-primary submit-btn" onClick={() => dispatch(changePrescriptionStatus(prescription._id))}>
                                                                    <i class="fas fa-check"></i> Accept
                                                                </button>
                                                            }</td>
                                                        </tr>
                                                    </tbody>
                                                ))}
                                            </table>
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

export default PharmacyOrders
