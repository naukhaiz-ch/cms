import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

export default (appointments = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...appointments, action.payload]
        case UPDATE:
            return appointments.map((appointment) => (appointment._id === action.payload._id ? action.payload : appointment))
        case DELETE:
            return appointments.filter((appointment) => appointment._id !== action.payload)
        default:
            return appointments
    }
}