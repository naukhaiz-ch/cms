import { FETCH_ALL_PRESCRIPTIONS, CREATE_PRESCRIPTION, UPDATE_PRESCRIPTION, DELETE_PRESCRIPTION } from '../constants/actionTypes'

export default (prescriptions = [], action) => {
    switch (action.type) {
        case FETCH_ALL_PRESCRIPTIONS:
            return action.payload
        case CREATE_PRESCRIPTION:
            return [...prescriptions, action.payload]
        case UPDATE_PRESCRIPTION:
            return prescriptions.map((prescription) => (prescription._id === action.payload._id ? action.payload : prescription))
        case DELETE_PRESCRIPTION:
            return prescriptions.filter((prescription) => prescription._id !== action.payload)
        default:
            return prescriptions
    }
}