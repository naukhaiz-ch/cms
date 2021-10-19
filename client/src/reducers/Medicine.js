import { FETCH_ALL_MEDICINES, CREATE_MEDICINE, UPDATE_MEDICINE, DELETE_MEDICINE } from '../constants/actionTypes'

export default (medicines = [], action) => {
    switch (action.type) {
        case FETCH_ALL_MEDICINES:
            return action.payload
        case CREATE_MEDICINE:
            return [...medicines, action.payload]
        case UPDATE_MEDICINE:
            return medicines.map((medicine) => (medicine._id === action.payload._id ? action.payload : medicine))
        case DELETE_MEDICINE:
            return medicines.filter((medicine) => medicine._id !== action.payload)
        default:
            return medicines
    }
}