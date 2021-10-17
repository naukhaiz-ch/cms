import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { signIn } from '../../actions/auth'

const initialState = {
    email: '',
    password: ''
}

const Auth = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [formData, setFormData] = useState(initialState)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signIn(formData, history))
    }
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <div className="content" style={{ margin: '100px' }}>
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
                                                Sign In to Doccure
                                            </h3>
                                        </div>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-group form-focus">
                                                <input type="email" name="email" className="form-control floating" onChange={handleChange} />
                                                <label className="focus-label">Email</label>
                                            </div>
                                            <div className="form-group form-focus">
                                                <input type="password" name="password" className="form-control floating" onChange={handleChange} />
                                                <label className="focus-label">Password</label>
                                            </div>
                                            <button
                                                className="btn btn-primary btn-block btn-lg login-btn"
                                                type="submit">Sign In
                                            </button>
                                        </form>
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

export default Auth