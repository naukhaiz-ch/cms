import { FETCH_ALL_APPOINTMENTS } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (appointments = [], action) => {
  switch (action.type) {
    case FETCH_ALL_APPOINTMENTS:
      return action.payload
    default:
      return appointments
  }
}