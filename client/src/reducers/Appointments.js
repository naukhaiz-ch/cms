import { FETCH_ALL_APPOINTMENTS, CREATE_APPOINTMENT, UPDATE_APPOINTMENT, DELETE_APPOINTMENT } from '../constants/actionTypes'

export default (appointments = [], action) => {
    switch (action.type) {
        case FETCH_ALL_APPOINTMENTS:
            return action.payload
        case CREATE_APPOINTMENT:
            return [...appointments, action.payload]
        case UPDATE_APPOINTMENT:
            return appointments.map((appointment) => (appointment._id === action.payload._id ? action.payload : appointment))
        case DELETE_APPOINTMENT:
            return appointments.filter((appointment) => appointment._id !== action.payload)
        default:
            return appointments
    }
}