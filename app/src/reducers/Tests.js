import { FETCH_ALL_TESTS } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (tests = [], action) => {
  switch (action.type) {
    case FETCH_ALL_TESTS:
      return action.payload
    default:
      return tests
  }
}