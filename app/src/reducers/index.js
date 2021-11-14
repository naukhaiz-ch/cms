import { combineReducers } from "redux"

import appointments from './Appointments'
import medicines from './Medicines'
import prescriptions from './Prescriptions'
import tests from './Tests'
import users from './Users'
import auth from './auth'
import loader from './loader'


export default combineReducers({ appointments, medicines, prescriptions, tests, users, loader, auth })