import { FETCH_ALL_TESTS, CREATE_TEST, UPDATE_TEST, DELETE_TEST } from '../constants/actionTypes'

export default (tests = [], action) => {
    switch (action.type) {
        case FETCH_ALL_TESTS:
            return action.payload
        case CREATE_TEST:
            return [...tests, action.payload]
        case UPDATE_TEST:
            return tests.map((test) => (test._id === action.payload._id ? action.payload : test))
        case DELETE_TEST:
            return tests.filter((test) => test._id !== action.payload)
        default:
            return tests
    }
}