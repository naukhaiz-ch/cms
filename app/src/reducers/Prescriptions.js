import { FETCH_ALL_PRESCRIPTIONS } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (prescriptions = [], action) => {
  switch (action.type) {
    case FETCH_ALL_PRESCRIPTIONS:
      return action.payload
    default:
      return prescriptions
  }
}