import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Sidebar from './components/Sidebar';
import { Link } from 'react-router-dom';
import { getUsers, changeUserStatus } from '../actions/users';
import moment from 'moment';

const Pharmacy = () => {
    const userRole = 'Pharmacy'
    const dispatch = useDispatch()
    const users = useSelector((state) => state.users)

    useEffect(() => {
        dispatch(getUsers(userRole))
    }, dispatch)


    return (
        <>
            <div class="page-wrapper">
                <Sidebar />
                <div class="content container-fluid">
                    <div class="page-header">
                        <div class="row">
                            <div class="col-sm-7 col-auto">
                                <h3 class="page-title">Pharmacy List</h3>
                                <ul class="breadcrumb">
                                    <li class="breadcrumb-item">
                                        <Link to="/">Dashboard</Link>
                                    </li>
                                    <li class="breadcrumb-item active">Pharmacy List</li>
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
                                            class="datatable table table-hover table-center mb-0"
                                        >
                                            <thead>
                                                <tr>
                                                    <th>Pharmacy Name</th>
                                                    <th>Pharmacy Address</th>
                                                    <th>Pharmacy Email</th>
                                                    <th>Status</th>
                                                    <th>Phone</th>
                                                    <th>Created Date</th>
                                                </tr>
                                                {users.map((user) => (
                                                    <tr>
                                                        <td>{user.name}</td>
                                                        <td></td>
                                                        <td>{user.email}</td>
                                                        <td>
                                                            {user.userStatus === 'active' ? (
                                                                <button type="button" className="btn btn-secondary mr-0" onClick={() => dispatch(changeUserStatus(user._id))}><i className="fa fa-eye"></i></button>
                                                            ) : (
                                                                <button type="button" className="btn btn-warning mr-0" onClick={() => dispatch(changeUserStatus(user._id))}><i className="fa fa-eye-slash"></i></button>
                                                            )}
                                                        </td>
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
                </div>
            </div>
        </>
    )
}

export default Pharmacy