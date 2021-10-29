import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import FileBase from 'react-file-base64'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Sidebar from './components/pharmDash/Sidebar';
import { getTests, updateTest, changeTestStatus } from '../actions/Test';

const LaboratoryOrders = () => {
    const dispatch = useDispatch()
    const localUser = JSON.parse(localStorage.getItem('profile'))
    const tests = useSelector((state) => state.tests)
    const id = localUser?.result?._id

    useEffect(() => {
        dispatch(getTests())
    }, dispatch)

    const [labReport, setLabReport] = useState({
        selectedFile: ''
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
                                    <div class="tests">
                                        <div class="table-responsive">
                                            <table class="table table-hover table-center mb-0">
                                                <thead>
                                                    <tr>
                                                        <th>Patient Name</th>
                                                        <th>Test Name</th>
                                                        <th>Time</th>
                                                        <th>Date</th>
                                                    </tr>
                                                </thead>
                                                {tests.map((test) => (
                                                    <tbody>
                                                        <tr>
                                                            <td>{test.patientId}</td>
                                                            <td>{test.testName}</td>
                                                            <td>{test.testTime}</td>
                                                            <td>{test.testDate}</td>
                                                            <td>{test.testStatus === 'active' ?
                                                                <button type="button" className="btn btn-primary submit-btn" onClick={() => dispatch(changeTestStatus(test._id))}>
                                                                    <i class="fas fa-times"></i> Cancel
                                                                </button> :
                                                                <button type="button" className="btn btn-primary submit-btn" onClick={() => dispatch(changeTestStatus(test._id))}>
                                                                    <i class="fas fa-check"></i> Accept
                                                                </button>
                                                            }</td>
                                                            <td>
                                                                {
                                                                    test.testStatus === 'active' && (
                                                                        <div>
                                                                            <FileBase type="file" multiple={false}
                                                                                onDone={({ base64 }) => setLabReport({ ...labReport, selectedFile: base64 })}
                                                                            />
                                                                            <button type="button" className="btn btn-primary submit-btn" onClick={() => dispatch(updateTest(test._id, labReport))}>
                                                                                Add Report
                                                                            </button>
                                                                        </div>
                                                                    )
                                                                }
                                                            </td>
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

export default LaboratoryOrders
