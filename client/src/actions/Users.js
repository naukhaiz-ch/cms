import { FETCH_ALL_USERS } from '../constants/actionTypes'
import * as api from '../api/Index'

// Action Creators
export const getUsers = (userRole) => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers(userRole)
        dispatch({
            type: FETCH_ALL_USERS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getSingleUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.fetchSingleUser(id)
        // alert(JSON.stringify(data))
        return (JSON.stringify(data))
    } catch (error) {
        console.log(error)
    }
}