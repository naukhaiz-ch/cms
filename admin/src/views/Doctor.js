import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { Link } from 'react-router-dom';
import { getUsers } from '../actions/users';
import moment from 'moment';

const Doctor = () => {
    const userRole = 'Doctor'
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(getUsers(userRole))
    }, dispatch)

    return (
        <div class="page-wrapper">
            <Sidebar />
            <div class="content container-fluid">
                <div class="page-header">
                    <div class="row">
                        <div class="col-sm-12">
                            <h3 class="page-title">List of Doctors</h3>
                            <ul class="breadcrumb">
                                <li class="breadcrumb-item">
                                    <Link to="/">Dashboard</Link>
                                </li>
                                <li class="breadcrumb-item active">Doctors List</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card">
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table
                                        class="datatable table table-hover table-center mb-0">
                                        <thead>
                                            <tr>
                                                <th>Doctors Name</th>
                                                <th>Doctors Address</th>
                                                <th>Doctors Email</th>
                                                <th>Status</th>
                                                <th>Phone</th>
                                                <th>Created Date</th>
                                            </tr>
                                            {users.map((user) => (
                                                <tr>
                                                    <td>{user.name}</td>
                                                    <td></td>
                                                    <td>{user.email}</td>
                                                    <td>{user.userStatus}</td>
                                                    <td>{user.phoneNo}</td>
                                                    <td>{moment(user.createdAt).format("hh:mm A | MMM Mo, YYYY")}</td>
                                                </tr>
                                            ))}
                                        </thead>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Doctor
