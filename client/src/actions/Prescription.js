import { CREATE, UPDATE, FETCH_ALL } from '../constants/actionTypes'
import * as api from '../api/Index'

// Action Creators
export const getPrescriptions = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPrescriptions()
        dispatch({
            type: FETCH_ALL,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createPrescription = (pharmacyData) => async (dispatch) => {
    try {
        const { data } = await api.createPrescription(pharmacyData)
        if (data?._id !== null) {
            dispatch({
                type: CREATE,
                payload: data
            })
            alert('Your order is placed')
            window.location.reload()
        }

    } catch (error) {
        console.log(error)
    }
}

export const changePrescriptionStatus = (id) => async (dispatch) => {
    try {
        const { data } = await api.changePrescriptionStatus(id)
        dispatch({
            type: UPDATE,
            payload: data
        })
    } catch (error) {

    }
}