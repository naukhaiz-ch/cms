import React, { useEffect } from 'react'
import { useLocation } from "react-router"
import { getTests } from '../../../actions/Test';
import { getAllUsers } from '../../../actions/Users';
import { useDispatch, useSelector } from 'react-redux';

const Records = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)
    const tests = useSelector((state) => state.tests)
    const location = useLocation()
    const { patientId } = location.state

    useEffect(() => {
        dispatch(getTests())
        dispatch(getAllUsers())
    }, dispatch)
    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12">
                        <div className="card card-table mb-0">
                            <div className="card-body">
                                <div class="card-header">
                                    <h4 class="card-title mb-0">
                                        Medical Records of &nbsp;
                                        {users.map((user) => (
                                            user._id === patientId && (user.name)
                                        ))}
                                    </h4>
                                </div>
                                <div className="table-responsive">
                                    <table className="table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Lab Name</th>
                                                <th>Test</th>
                                                <th>Time</th>
                                                <th>Date</th>
                                                <th>Attachment</th>
                                            </tr>
                                        </thead>
                                        {tests.map((test) => (
                                            test.patientId === patientId && (
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            {users.map((user) => (
                                                                user._id === test.labId && (user.name)
                                                            ))}
                                                        </td>
                                                        <td>{test.testName}</td>
                                                        <td>{test.testTime}</td>
                                                        <td>{test.testDate}</td>
                                                        <td>
                                                            <h2 className="table-avatar">
                                                                <a href={test.selectedFile} download className="fa fa-download btn bg-primary-light ml-4"></a>
                                                            </h2>
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
        </>
    )
}

export default Records
