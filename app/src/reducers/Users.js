import { FETCH, FETCH_ALL_USERS, FETCH_USER } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (users = [], action) => {
  switch (action.type) {
    case FETCH_USER:
      return action.payload
    case FETCH_ALL_USERS:
      return action.payload
    default:
      return users
  }
}