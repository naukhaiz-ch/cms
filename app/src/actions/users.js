import { FETCH_ALL_USERS, FETCH_USER, } from "../constants/actionTypes"
import * as api from "../api"

import { loaderStatus } from './loader'

// Action Creators
export const getUsers = (userRole) => async (dispatch) => {
	try {
		dispatch(loaderStatus({ status: true }))

		const { data } = await api.fetchUsers(userRole)

		dispatch({
			type: FETCH_ALL_USERS,
			payload: data,
		})

		dispatch(loaderStatus({ status: false }))
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
			payload: data,
		})
	} catch (error) {
		console.log(error)
	}
}
