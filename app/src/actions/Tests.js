import { FETCH_ALL_TESTS } from '../constants/actionTypes'
import * as api from '../api'

// Action Creators
export const getTests = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTests()
        dispatch({
            type: FETCH_ALL_TESTS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}