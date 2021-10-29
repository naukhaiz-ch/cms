import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'
import { signUp, signIn } from '../../actions/Auth';
import Navbar from './Navbar';
import Footer from './Footer';

const initialState = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phoneNO: '',
    userRole: '',
    userStatus: 'inactive'
}

const Auth = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [isSignUp, setIsSignUp] = useState(false)
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (isSignUp) {
            dispatch(signUp(formData, history))
        } else {
            dispatch(signIn(formData, history))
        }
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
    }


    return (
        <>
            <Navbar />


            <div className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-8 offset-md-2">
                            <div className="account-content">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-md-7 col-lg-6 login-left">
                                        <img
                                            src="assets/img/login-banner.png"
                                            className="img-fluid"
                                            alt="Doccure Register"
                                        />
                                    </div>
                                    <div className="col-md-12 col-lg-6 login-right">
                                        <div className="login-header">
                                            <h3>
                                                {isSignUp ? 'Already Have an Account?' : 'Sign In to Doccure'}
                                            </h3>
                                        </div>

                                        <form onSubmit={handleSubmit}>
                                            {isSignUp && (
                                                <>
                                                    <div className="form-group form-focus">
                                                        <input type="text" className="form-control floating" name="name" onChange={handleChange} />
                                                        <label className="focus-label">Name</label>
                                                    </div>
                                                </>
                                            )
                                            }
                                            <div className="form-group form-focus">
                                                <input type="email" name="email" className="form-control floating" onChange={handleChange} />
                                                <label className="focus-label">Email</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="password" name="password" className="form-control floating" onChange={handleChange} />
                                                <label className="focus-label">Password</label>
                                            </div>
                                            {isSignUp &&
                                                <div>
                                                    <div className="form-group form-focus">
                                                        <input type="password" name="confirmPassword" className="form-control floating" onChange={handleChange} />
                                                        <label className="focus-label">Confirm Password</label>
                                                    </div>
                                                    <div className="form-group form-focus">
                                                        <input type="text" name="phoneNo" className="form-control floating" onChange={handleChange} />
                                                        <label className="focus-label">Phone No</label>
                                                    </div>
                                                    <div>
                                                        <p>Please select your account type </p>
                                                        <input type="radio" id="patient" name="userRole" value="Patient" onChange={handleChange} />
                                                        <label for="patient" style={{ padding: '10px' }}>Patient</label>
                                                        <input type="radio" id="doctor" name="userRole" value="Doctor" onChange={handleChange} />
                                                        <label for="doctor" style={{ padding: '10px' }}>Doctor</label>
                                                        <input type="radio" id="laboratory" name="userRole" value="Laboratory" onChange={handleChange} />
                                                        <label for="laboratory" style={{ padding: '10px' }}>Laboratory</label>
                                                        <input type="radio" id="pharmacy" name="userRole" value="Pharmacy" onChange={handleChange} />
                                                        <label for="pharmacy" style={{ padding: '10px' }}>Pharmacy</label>
                                                    </div>
                                                </div>
                                            }
                                            <div className="text-right">
                                                <p type="button" className="forgot-link" onClick={switchMode}>
                                                    {isSignUp ? 'Already Have an Account?' : 'Do not have an account?'}
                                                </p>
                                            </div>
                                            <button
                                                className="btn btn-primary btn-block btn-lg login-btn"
                                                type="submit"> {isSignUp ? 'Sign Up' : 'Sign In'}
                                            </button>
                                        </form>
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

export default Auth