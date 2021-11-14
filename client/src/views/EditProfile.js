import React, { useState, useEffect } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { updateUser, getSingleUser } from '../actions/Users'

const EditProfile = () => {

    const dispatch = useDispatch()
    const localUser = JSON.parse(localStorage.getItem('profile'))
    const userProfile = useSelector((state) => state.userProfile)

    const [editProfile, setEditProfile] = useState({
        name: userProfile.name,
        email: userProfile.email,
        phoneNo: userProfile.phoneNo,
        education: userProfile.education,
        speciality: userProfile.speciality,
        experience: userProfile.experience,
        credits: userProfile.credits,
        address: userProfile.address,
        dob: userProfile.dob,
        city: userProfile.city,
        country: userProfile.country,
        selectedFile: userProfile.selectedFile
    })

    useEffect(() => {
        dispatch(getSingleUser(localUser?.result?._id))
    }, dispatch)

    // alert(JSON.stringify(userProfile.name))


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
                        <div class="col-xl-10 offset-1">
                            <div class="card">
                                <div class="card-body">
                                    <h4 class="card-title">Basic Information</h4>
                                    <div class="row form-row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <div class="change-avatar">
                                                    <div class="profile-img">
                                                        <img
                                                            src={editProfile.selectedFile}
                                                            alt="User pic"
                                                        />
                                                    </div>
                                                    <div class="upload-img">
                                                        <div class="change-photo-btn">
                                                            <FileBase
                                                                type="file" class="upload" multiple={false}
                                                                onDone={({ base64 }) => setEditProfile({ ...editProfile, selectedFile: base64 })}
                                                            />
                                                        </div>
                                                        <small class="form-text text-muted">
                                                            Allowed JPG or PNG. Max size of 2MB
                                                        </small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>
                                                    Username <span class="text-danger">*</span>
                                                </label>
                                                <input type="text" class="form-control" value={editProfile.name} onChange={(e) => setEditProfile({ ...editProfile, name: e.target.value })} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Email <span class="text-danger">*</span></label>
                                                <input type="email" class="form-control" value={editProfile.email} onChange={(e) => setEditProfile({ ...editProfile, email: e.target.value })} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Phone Number</label>
                                                <input type="text" class="form-control" value={editProfile.phoneNo} onChange={(e) => setEditProfile({ ...editProfile, phoneNo: e.target.value })} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Education</label>
                                                <input type="email" class="form-control" value={editProfile.education} onChange={(e) => setEditProfile({ ...editProfile, education: e.target.value })} />
                                            </div>
                                        </div>
                                        {localUser?.result?.userRole !== 'Patient' && (
                                            <>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>Speciality</label>
                                                        <input type="email" class="form-control" value={editProfile.speciality} onChange={(e) => setEditProfile({ ...editProfile, speciality: e.target.value })} />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>Experience</label>
                                                        <input type="email" class="form-control" value={editProfile.experience} onChange={(e) => setEditProfile({ ...editProfile, experience: e.target.value })} />
                                                    </div>
                                                </div>
                                                <div class="col-md-6">
                                                    <div class="form-group">
                                                        <label>Credits</label>
                                                        <input type="email" class="form-control" value={editProfile.credits} onChange={(e) => setEditProfile({ ...editProfile, credits: e.target.value })} />
                                                    </div>
                                                </div>
                                            </>
                                        )}
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Gender</label>
                                                <select class="form-control select">
                                                    <option>Select</option>
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <div className="clinic-booking">
                                                    <label>Date of Birth</label>
                                                    <input type="date" className="apt-btn" name="dob" onChange={(e) => setEditProfile({ ...editProfile, dob: e.target.value })} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card contact-card">
                                <div class="card-body">
                                    <h4 class="card-title">Contact Details</h4>
                                    <div class="row form-row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Address</label>
                                                <input type="text" class="form-control" value={editProfile.address} onChange={(e) => setEditProfile({ ...editProfile, address: e.target.value })} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="control-label">City</label>
                                                <input type="text" class="form-control" value={editProfile.city} onChange={(e) => setEditProfile({ ...editProfile, city: e.target.value })} />
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="control-label">Country</label>
                                                <input type="text" class="form-control" value={editProfile.country} onChange={(e) => setEditProfile({ ...editProfile, country: e.target.value })} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="submit-section submit-btn-bottom">
                                <button type="submit" class="btn btn-primary submit-btn" onClick={() => dispatch(updateUser(localUser?.result?._id, editProfile))}>
                                    Save Changes
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default EditProfile
