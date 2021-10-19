import { CREATE_MEDICINE, FETCH_ALL_MEDICINES } from '../constants/actionTypes'
import * as api from '../api/Index'

// Action Creators
export const getMedicines = () => async (dispatch) => {
    try {
        const { data } = await api.fetchMedicines()
        dispatch({
            type: FETCH_ALL_MEDICINES,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const createMedicine = (medicineData) => async (dispatch) => {
    try {
        const { data } = await api.createMedicine(medicineData)
        if (data?._id !== null) {
            dispatch({
                type: CREATE_MEDICINE,
                payload: data
            })
            alert('Prescription Added')
        }

    } catch (error) {
        console.log(error)
    }
}
