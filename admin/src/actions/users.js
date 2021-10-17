import { FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes'
import * as api from '../api'

// Action Creators
export const getUsers = (userRole) => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers(userRole)
        dispatch({
            type: FETCH_ALL,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}