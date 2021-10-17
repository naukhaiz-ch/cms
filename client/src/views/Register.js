import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, Link } from 'react-router-dom';
import { AUTH } from '../../constants/actionTypes';
import { signUp, signIn } from '../../actions/auth';
import FileBase from 'react-file-base64';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const initialStage = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    userStatus: 'active'
}

const Auth = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [showPassword, setShowPassword] = useState(false)
    const [isSignUp, setIsSignUp] = useState(false)
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()

        // alert(JSON.stringify(formData))
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
    const handleShowPassword = () => setShowPassword((prevShowPassword) => !prevShowPassword)

    const switchMode = () => {
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        setShowPassword(false)
    }


    function Register() {
        return (
            <>
                <Navbar />


                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-8 offset-md-2">
                                <div class="account-content">
                                    <div class="row align-items-center justify-content-center">
                                        <div class="col-md-7 col-lg-6 login-left">
                                            <img
                                                src="assets/img/login-banner.png"
                                                class="img-fluid"
                                                alt="Doccure Register"
                                            />
                                        </div>
                                        <div class="col-md-12 col-lg-6 login-right">
                                            <div class="login-header">
                                                <h3>
                                                    Register in Doccure
                                                </h3>
                                            </div>

                                            <form>
                                                <div class="form-group form-focus">
                                                    <input type="text" class="form-control floating" />
                                                    <label class="focus-label">Name</label>
                                                </div>
                                                <div class="form-group form-focus">
                                                    <input type="email" class="form-control floating" />
                                                    <label class="focus-label">Email</label>
                                                </div>
                                                <div class="form-group form-focus">
                                                    <input type="password" class="form-control floating" />
                                                    <label class="focus-label">Password</label>
                                                </div>
                                                <div class="form-group form-focus">
                                                    <input type="password" class="form-control floating" />
                                                    <label class="focus-label">Confirm Password</label>
                                                </div>
                                                <div>
                                                    <p>Please select your account type </p>
                                                    <input type="radio" id="patient" name="userRole" />
                                                    <label for="patient" style={{ padding: '10px' }}>Patient</label>
                                                    <input type="radio" id="doctor" name="userRole" />
                                                    <label for="doctor" style={{ padding: '10px' }}>Doctor</label>
                                                    <input type="radio" id="laboratory" name="userRole" />
                                                    <label for="laboratory" style={{ padding: '10px' }}>Laboratory</label>
                                                    <input type="radio" id="pharmacy" name="userRole" />
                                                    <label for="pharmacy" style={{ padding: '10px' }}>Pharmacy</label>
                                                </div>
                                                <div class="text-right">
                                                    <Link class="forgot-link" to="/login"
                                                    >Already have an account?</Link
                                                    >
                                                </div>
                                                <button
                                                    class="btn btn-primary btn-block btn-lg login-btn"
                                                    type="submit">
                                                    Signup
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

    export default Register
