import React from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom';
import Sidebar from './components/pharmDash/Sidebar';

const EditProfile = () => {
    return (
        <>
            <Navbar />

            <div class="breadcrumb-bar">
                <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-md-12 col-12">
                            <nav aria-label="breadcrumb" class="page-breadcrumb">
                                <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to='/'>Home</Link></li>
                                    <li class="breadcrumb-item active" aria-current="page">
                                        Edit Profile
                                    </li>
                                </ol>
                            </nav>
                            <h2 class="breadcrumb-title">Edit Profile</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div class="content">
                <div class="container-fluid">
                    <div class="row">
                        <Sidebar />
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default EditProfile
