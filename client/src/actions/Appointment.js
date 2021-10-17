import { FETCH_ALL, CREATE, UPDATE } from '../constants/actionTypes';
import * as api from '../api/Index';


export const createAppointment = (appointmentData) => async (dispatch) => {
    try {
        const { data } = await api.createAppointment(appointmentData)
        dispatch({
            type: CREATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAppointments = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAppointments()
        dispatch({
            type: FETCH_ALL,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const changeAppointmentStatus = (id) => async (dispatch) => {
    try {
        const { data } = await api.changeAppointmentStatus(id)
        dispatch({
            type: UPDATE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}