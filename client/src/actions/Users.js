import { FETCH_ALL_USERS, FETCH_USER, UPDATE_USER, UPDATE_USER_PROFILE } from '../constants/actionTypes'
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
export const getAllUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchAllUsers()
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
        dispatch({
            type: FETCH_USER,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const setUserKey = (id, userKey) => async (dispatch) => {
    try {
        const { data } = await api.setUserKey(id, { userKey: userKey })
        dispatch({
            type: UPDATE_USER,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}


export const updateUser = (id, userData) => async (dispatch) => {
    try {
        const { data } = await api.updatedUser(id, userData)
        dispatch({
            type: UPDATE_USER_PROFILE,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}