import { combineReducers } from "redux"

import users from './Users'
import auth from './Auth'
import appointments from './Appointments'
import prescriptions from './Prescription'
import medicines from './Medicine'
import tests from './Test'

export default combineReducers({ auth, users, appointments, prescriptions, medicines, tests })