import { FETCH_ALL_MEDICINES } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (medicines = [], action) => {
  switch (action.type) {
    case FETCH_ALL_MEDICINES:
      return action.payload
    default:
      return medicines
  }
}