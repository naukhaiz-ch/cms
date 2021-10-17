import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (prescriptions = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case CREATE:
            return [...prescriptions, action.payload]
        case UPDATE:
            return prescriptions.map((prescription) => (prescription._id === action.payload._id ? action.payload : prescription))
        case DELETE:
            return prescriptions.filter((prescription) => prescription._id !== action.payload)
        default:
            return prescriptions
    }
}