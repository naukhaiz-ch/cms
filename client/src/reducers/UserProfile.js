import { UPDATE_USER_PROFILE, FETCH_USER } from '../constants/actionTypes'

export default (userProfile = [], action) => {
    switch (action.type) {
        case FETCH_USER:
            return action.payload
        case UPDATE_USER_PROFILE:
            return userProfile.map((userProfile) => (userProfile._id === action.payload._id ? action.payload : userProfile))
        default:
            return userProfile
    }
}