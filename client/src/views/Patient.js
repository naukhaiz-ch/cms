import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAppointments } from '../actions/Appointment';
import { getPrescriptions } from '../actions/Prescription';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom';
import Sidebar from './components/patientDash/Sidebar';


const Patient = () => {
    const dispatch = useDispatch()
    const localUser = JSON.parse(localStorage.getItem('profile'))
    const appointments = useSelector((state) => state.appointments)
    const prescriptions = useSelector((state) => state.prescriptions)
    const id = localUser?.result?._id

    useEffect(() => {
        dispatch(getAppointments())
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
                        <div class="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <Sidebar />
                        </div>
                        <div class="col-md-7 col-lg-8 col-xl-9">
                            <div class="card">
                                <div class="card-body pt-0">
                                    <nav class="user-tabs mb-4">
                                        <ul class="nav nav-tabs nav-tabs-bottom nav-justified">
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link active"
                                                    href="#pat_appointments"
                                                    data-toggle="tab"
                                                >Appointments</a
                                                >
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link"
                                                    href="#pat_prescriptions"
                                                    data-toggle="tab"
                                                >Prescriptions</a
                                                >
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link"
                                                    href="#pat_billing"
                                                    data-toggle="tab"
                                                >Qoutations</a
                                                >
                                            </li>
                                            <li class="nav-item">
                                                <a
                                                    class="nav-link"
                                                    href="#pat_medical_records"
                                                    data-toggle="tab"
                                                ><span class="med-records">Medical Records</span></a
                                                >
                                            </li>
                                        </ul>
                                    </nav>

                                    <div class="tab-content pt-0">
                                        <div id="pat_appointments"
                                            class="tab-pane fade show active">
                                            <div class="card card-table mb-0">
                                                <div class="card-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Doctor</th>
                                                                    <th>Appt Time</th>
                                                                    <th>Appt Date</th>
                                                                    <th>Bill</th>
                                                                    <th>Status</th>
                                                                </tr>
                                                            </thead>
                                                            {appointments.map((appointment) => (
                                                                appointment.patientId === localUser?.result?._id && (
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                <h2 class="table-avatar">
                                                                                    <Link
                                                                                        to="/doc-profile"
                                                                                        class="avatar avatar-sm mr-2"
                                                                                    >
                                                                                        <img
                                                                                            class="avatar-img rounded-circle"
                                                                                            src="assets/img/doctors/doctor-thumb-01.jpg"
                                                                                            alt="User pic"
                                                                                        />
                                                                                    </Link>
                                                                                    <Link to="/doc-profile">
                                                                                        {appointment.doctorId}
                                                                                    </Link>
                                                                                </h2>
                                                                            </td>
                                                                            <td>{appointment.appointmentTime}</td>
                                                                            <td>{appointment.appointmentDate}</td>
                                                                            <td>{appointment.totalBill}</td>
                                                                            <td>{appointment.appointmentStatus}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                )))}
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="pat_prescriptions" class="tab-pane fade">
                                            <div class="card card-table mb-0">
                                                <div class="card-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Date</th>
                                                                    <th>Name</th>
                                                                    <th>Created by</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>14 Nov 2019</td>
                                                                    <td>Prescription 1</td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <Link
                                                                                to="/doc-profile"
                                                                                class="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    class="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-01.jpg"
                                                                                    alt="User pic"
                                                                                />
                                                                            </Link>
                                                                            <Link to="/doc-profile"
                                                                            >Dr. Ruby Perrin <span>Dental</span></Link
                                                                            >
                                                                        </h2>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="pat_billing" class="tab-pane fade">
                                            <div class="card card-table mb-0">
                                                <div class="card-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Product</th>
                                                                    <th>Pharmacy Name</th>
                                                                    <th>Quantity</th>
                                                                    <th>Status</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            {prescriptions.map((prescription) => (
                                                                prescription.patientId === localUser?.result?._id && (
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
                                                                                    </p><a href={prescription.selectedFile} download class="fas fa-download"></a>
                                                                                </h2>
                                                                            </td>
                                                                            <td>{prescription.pharmacyId}</td>
                                                                            <td>{prescription.quantity}</td>
                                                                            <td>{prescription.prescriptionStatus}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                )))}
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="pat_medical_records" class="tab-pane fade">
                                            <div class="card card-table mb-0">
                                                <div class="card-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>ID</th>
                                                                    <th>Date</th>
                                                                    <th>Description</th>
                                                                    <th>Attachment</th>
                                                                    <th>Created</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td>
                                                                        <Link to="/">#MR-0010</Link>
                                                                    </td>
                                                                    <td>14 Nov 2019</td>
                                                                    <td>Dental Filling</td>
                                                                    <td><Link to="#">dental-test.pdf</Link></td>
                                                                    <td>
                                                                        <h2 class="table-avatar">
                                                                            <Link
                                                                                to="doc-profile.html"
                                                                                class="avatar avatar-sm mr-2"
                                                                            >
                                                                                <img
                                                                                    class="avatar-img rounded-circle"
                                                                                    src="assets/img/doctors/doctor-thumb-01.jpg"
                                                                                    alt="User pic"
                                                                                />
                                                                            </Link>
                                                                            <Link to="/doc-profile"
                                                                            >Dr. Ruby Perrin <span>Dental</span></Link
                                                                            >
                                                                        </h2>
                                                                    </td>

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

            <Footer />
        </>
    )
}

export default Patient