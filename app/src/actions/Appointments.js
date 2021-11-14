import { FETCH_ALL_APPOINTMENTS } from '../constants/actionTypes'
import * as api from '../api'

// Action Creators
export const getAppointments = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAppointments()
        dispatch({
            type: FETCH_ALL_APPOINTMENTS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}
