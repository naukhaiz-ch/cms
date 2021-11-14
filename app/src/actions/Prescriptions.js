import { FETCH_ALL_PRESCRIPTIONS } from '../constants/actionTypes'
import * as api from '../api'

// Action Creators
export const getPrescriptions = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPrescriptions()
        dispatch({
            type: FETCH_ALL_PRESCRIPTIONS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}