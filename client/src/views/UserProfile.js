import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from "react-router"
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom';

function UserProfile() {

    const users = useSelector((state) => state.users)
    const location = useLocation()
    const { userId } = location.state
    return (
        <>
            <Navbar />


            <div class="main-wrapper">

                <div class="breadcrumb-bar">
                    <div class="container-fluid">
                        <div class="row align-items-center">
                            <div class="col-md-12 col-12">
                                <nav aria-label="breadcrumb" class="page-breadcrumb">
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                        <li class="breadcrumb-item active" aria-current="page">
                                            Doctor Profile
                                        </li>
                                    </ol>
                                </nav>
                                <h2 class="breadcrumb-title">Doctor Profile</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="content">
                    <div class="container">
                        <div class="card">
                            <div class="card-body">
                                {users.map((user) => (
                                    userId === user._id && (
                                        <div class="doctor-widget">
                                            <div class="doc-info-left">
                                                <div class="doctor-img">
                                                    <img
                                                        src={user.selectedFile}
                                                        class="img-fluid"
                                                        alt="UserImage"
                                                    />
                                                </div>
                                                <div class="doc-info-cont">
                                                    <h4 class="doc-name">{user.name}</h4>
                                                    <p class="doc-speciality">{user.speciality}</p>
                                                    <p className="doc-location mb-2">
                                                        <i className="fas fa-phone-volume mr-1"></i>
                                                        {user.phoneNo}
                                                    </p>
                                                    <p className="doc-location mb-2 text-ellipse">
                                                        <i class="fas fa-envelope mr-1"> </i>
                                                        {user.email}
                                                    </p>
                                                    <p class="doc-location">
                                                        <i class="fas fa-map-marker-alt"></i>{user.address}
                                                    </p>
                                                </div>
                                            </div>
                                            <div class="doc-info-right">
                                                <div class="clini-infos">
                                                    <ul>
                                                        <li>
                                                            <i class="fas fa-map-marker-alt"></i> {user.city}
                                                        </li>
                                                        <li>
                                                            <i class="far fa-money-bill-alt"></i> {user.credits}
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div class="clinic-booking">
                                                    <Link class="apt-btn" to="/doc-list">Book Appointment</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                ))}
                            </div>
                        </div>
                        {users.map((user) => (
                            userId === user._id && (
                                <div class="card">
                                    <div class="card-body ">
                                        <div class="tab-content">
                                            <div class="row">
                                                <div class="col-md-12 col-lg-9">
                                                    <div class="widget about-widget">
                                                        <h4 class="widget-title">About</h4>
                                                        <p>
                                                            {user.about}
                                                        </p>
                                                    </div>
                                                    <div class="widget education-widget">
                                                        <h4 class="widget-title">Education</h4>
                                                        {user.education}
                                                    </div>
                                                    <div class="widget experience-widget">
                                                        <h4 class="widget-title">Work & Experience</h4>
                                                        {user.experience}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )))}
                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}

export default UserProfile
