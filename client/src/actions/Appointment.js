import { FETCH_ALL_APPOINTMENTS, CREATE_APPOINTMENT, UPDATE_APPOINTMENT } from '../constants/actionTypes';
import * as api from '../api/Index';


export const createAppointment = (appointmentData) => async (dispatch) => {
    try {
        const { data } = await api.createAppointment(appointmentData)
        dispatch({
            type: CREATE_APPOINTMENT,
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
            type: FETCH_ALL_APPOINTMENTS,
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
            type: UPDATE_APPOINTMENT,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}