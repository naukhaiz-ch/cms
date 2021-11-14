import { combineReducers } from "redux"

import users from './Users'
import userProfile from './UserProfile'
import auth from './Auth'
import appointments from './Appointments'
import prescriptions from './Prescription'
import medicines from './Medicine'
import tests from './Test'

export default combineReducers({ auth, users, userProfile, appointments, prescriptions, medicines, tests })