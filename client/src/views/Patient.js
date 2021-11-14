import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64'
import moment from 'moment';
import { getAppointments } from '../actions/Appointment';
import { getMedicines } from '../actions/Medicine';
import { getPrescriptions } from '../actions/Prescription';
import { getTests, createTest, deleteTest } from '../actions/Test';
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom';
import Sidebar from './components/patientDash/Sidebar';
import { getAllUsers } from './../actions/Users';


const Patient = () => {
    const dispatch = useDispatch()
    const localUser = JSON.parse(localStorage.getItem('profile'))
    const appointments = useSelector((state) => state.appointments)
    const medicines = useSelector((state) => state.medicines)
    const prescriptions = useSelector((state) => state.prescriptions)
    const users = useSelector((state) => state.users)
    const tests = useSelector((state) => state.tests)
    const id = localUser?.result?._id

    useEffect(() => {
        dispatch(getAppointments())
        dispatch(getMedicines())
        dispatch(getPrescriptions())
        dispatch(getTests())
        dispatch(getAllUsers())
    }, dispatch)

    const [testData, setTestData] = useState({
        patientId: id,
        labId: '',
        testTime: '',
        testDate: '',
        testName: '',
        selectedFile: ''
    })


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
                                        Dashboard
                                    </li>
                                </ol>
                            </nav>
                            <h2 className="breadcrumb-title">Dashboard</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
                            <Sidebar />
                        </div>
                        <div className="col-md-7 col-lg-8 col-xl-9">
                            <div className="card">
                                <div className="card-body pt-0">
                                    <nav className="user-tabs mb-4">
                                        <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link active"
                                                    href="#pat_appointments"
                                                    data-toggle="tab"
                                                >Appointments</a
                                                >
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#pat_prescriptions"
                                                    data-toggle="tab"
                                                >Prescriptions</a
                                                >
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#pat_billing"
                                                    data-toggle="tab"
                                                >Qoutations</a
                                                >
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href="#pat_medical_records"
                                                    data-toggle="tab"
                                                ><span className="med-records">Medical Records</span></a
                                                >
                                            </li>
                                        </ul>
                                    </nav>

                                    <div className="tab-content pt-0">
                                        <div id="pat_appointments"
                                            className="tab-pane fade show active">
                                            <div className="card card-table mb-0">
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Doctor</th>
                                                                    <th>Appt Time</th>
                                                                    <th>Appt Date</th>
                                                                    <th>Bill</th>
                                                                    <th>Status</th>
                                                                    <th>Reason</th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            {appointments.map((appointment) => (
                                                                appointment.patientId === localUser?.result?._id && (
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                {users.map((user) => (
                                                                                    user._id === appointment.doctorId && (
                                                                                        <Link className="view-pro-btn" to={{
                                                                                            pathname: '/user-profile', state: { userId: user._id }
                                                                                        }}>
                                                                                            {user.name}
                                                                                        </Link>)
                                                                                ))}
                                                                            </td>
                                                                            <td>{appointment.appointmentTime}</td>
                                                                            <td>{appointment.appointmentDate}</td>
                                                                            <td>{appointment.totalBill}</td>
                                                                            <td>{appointment.appointmentStatus}</td>
                                                                            <td>{appointment.description}</td>
                                                                            <td>
                                                                                {appointment.appointmentStatus === 'active' &&
                                                                                    <div>
                                                                                        {users.map((user) => (
                                                                                            user._id === appointment.doctorId &&
                                                                                            (<button type="button" className="btn btn-primary submit-btn ml-5">
                                                                                                <Link className="apt-btn" to={{
                                                                                                    pathname: '/video-call', state: { advisorKey: user.userKey }
                                                                                                }}>
                                                                                                    Start Call
                                                                                                </Link>
                                                                                            </button>)
                                                                                        ))}

                                                                                    </div>
                                                                                }

                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                )))}
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="pat_prescriptions" className="tab-pane fade">
                                            <div className="card card-table mb-0">
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Time</th>
                                                                    <th>Doctor Name</th>
                                                                    <th>Medicine Name</th>
                                                                    <th>Quantity</th>
                                                                    <th>Days</th>
                                                                    <th>Morning</th>
                                                                    <th>Afternoon</th>
                                                                    <th>Night</th>
                                                                    <th>Test</th>
                                                                </tr>
                                                            </thead>
                                                            {medicines.map((medicine) => (
                                                                medicine.patientId === localUser?.result?._id && (
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>{moment(medicine.createdAt).format("hh:mm A | MMM Mo, YYYY")}</td>
                                                                            <td>
                                                                                {users.map((user) => (
                                                                                    user._id === medicine.doctorId && (
                                                                                        <Link className="view-pro-btn" to={{
                                                                                            pathname: '/user-profile', state: { userId: user._id }
                                                                                        }}>
                                                                                            {user.name}
                                                                                        </Link>)
                                                                                ))}
                                                                            </td>
                                                                            <td>{medicine.name}</td>
                                                                            <td>{medicine.quantity}</td>
                                                                            <td>{medicine.days}</td>
                                                                            <td>{medicine.morning}</td>
                                                                            <td>{medicine.afternoon}</td>
                                                                            <td>{medicine.night}</td>
                                                                            <td>{medicine.test}</td>
                                                                        </tr>
                                                                    </tbody>
                                                                )))}
                                                        </table>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="pat_billing" className="tab-pane fade">
                                            <div className="card card-table mb-0">
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-center mb-0">
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
                                                                                <h2 className="table-avatar">
                                                                                    <p href=""
                                                                                        className="avatar avatar-sm mr-2">
                                                                                        <img
                                                                                            className="avatar-img"
                                                                                            src={prescription.selectedFile}
                                                                                            alt="User pic"
                                                                                        />
                                                                                    </p><a href={prescription.selectedFile} download className="fa fa-download"></a>
                                                                                </h2>
                                                                            </td>
                                                                            <td>
                                                                                {users.map((user) => (
                                                                                    user._id === prescription.pharmacyId && (
                                                                                        <Link className="view-pro-btn" to={{
                                                                                            pathname: '/user-profile', state: { userId: user._id }
                                                                                        }}>
                                                                                            {user.name}
                                                                                        </Link>)
                                                                                ))}
                                                                            </td>
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

                                        <div id="pat_medical_records" className="tab-pane fade">
                                            <div class="text-right">
                                                <a
                                                    href="#"
                                                    class="add-new-btn"
                                                    data-toggle="modal"
                                                    data-target="#add_medical_records_modal"
                                                >Add Medical Records</a
                                                >
                                            </div>
                                            <div className="card card-table mb-0">
                                                <div className="card-body">
                                                    <div className="table-responsive">
                                                        <table className="table table-hover table-center mb-0">
                                                            <thead>
                                                                <tr>
                                                                    <th>Lab Name</th>
                                                                    <th>Test</th>
                                                                    <th>Time</th>
                                                                    <th>Date</th>
                                                                    <th>Status</th>
                                                                    <th>Attachment</th>
                                                                    <th>Delete</th>
                                                                </tr>
                                                            </thead>
                                                            {tests.map((test) => (
                                                                test.patientId === localUser?.result?._id && (
                                                                    <tbody>
                                                                        <tr>
                                                                            <td>
                                                                                {users.map((user) => (
                                                                                    user._id === test.labId && (
                                                                                        <Link className="view-pro-btn" to={{
                                                                                            pathname: '/user-profile', state: { userId: user._id }
                                                                                        }}>
                                                                                            {user.name}
                                                                                        </Link>)
                                                                                ))}
                                                                            </td>
                                                                            <td>{test.testName}</td>
                                                                            <td>{test.testTime}</td>
                                                                            <td>{test.testDate}</td>
                                                                            <td>{test.testStatus}</td>
                                                                            <td>
                                                                                <h2 className="table-avatar">
                                                                                    <a href={test.selectedFile} download className="fa fa-download btn bg-primary-light ml-4"></a>
                                                                                </h2>
                                                                            </td>
                                                                            <td>
                                                                                <i class="btn btn-sm bg-danger-light far fa-trash-alt ml-3" onClick={() => dispatch(deleteTest(test._id))}></i>
                                                                            </td>
                                                                        </tr>
                                                                    </tbody>
                                                                )))}
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
            <div
                class="modal fade custom-modal custom-medicalrecord-modal"
                id="add_medical_records_modal"
                data-select2-id="add_medical_records_modal"
                aria-hidden="true"
            >
                <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title">Add Medical Records</h5>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <form id="medical_records_form" enctype="multipart/form-data">
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col-6 offset-3">
                                        <div className="clinic-booking">
                                            <div class="form-group">
                                                <input type="text" className="apt-btn" name="date" onChange={(e) => setTestData({ ...testData, labId: e.target.value })} />
                                                <input type="date" className="apt-btn" name="date" onChange={(e) => setTestData({ ...testData, testDate: e.target.value })} />
                                                <input type="time" className="apt-btn" name="time" onChange={(e) => setTestData({ ...testData, testTime: e.target.value })} />
                                                <select name="test" id="test" className="apt-btn" onChange={(e) => setTestData({ ...testData, testName: e.target.value })} >
                                                    <option value="select">Select Test </option>
                                                    <option value="cbc">CBC</option>
                                                    <option value="lft">LFT</option>
                                                    <option value="xray">X-Ray</option>
                                                </select>
                                                <FileBase type="file" multiple={false}
                                                    onDone={({ base64 }) => setTestData({ ...testData, selectedFile: base64 })}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center mt-4">
                                    <div class="submit-section text-center">
                                        <button type="submit" id="medical_btn" class="btn btn-primary submit-btn" onClick={() => dispatch(createTest(testData))}>
                                            {/* <button type="submit" id="medical_btn" class="btn btn-primary submit-btn" onClick={() => dispatch(alert(JSON.stringify(testData)))}> */}
                                            Submit
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Patient