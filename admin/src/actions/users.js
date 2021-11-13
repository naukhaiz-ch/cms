import { FETCH_ALL_USERS, UPDATE_USER, DELETE_USER } from '../constants/actionTypes'
import * as api from '../api'

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

export const changeUserStatus = (id) => async (dispatch) => {
    try {
        const { data } = await api.changeUserStatus(id)
        dispatch({
            type: UPDATE_USER,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}