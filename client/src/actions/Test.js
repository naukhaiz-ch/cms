import { FETCH_ALL_TESTS, CREATE_TEST, UPDATE_TEST, DELETE_TEST } from '../constants/actionTypes';
import * as api from '../api/Index';


export const createTest = (testData) => async (dispatch) => {
    try {
        const { data } = await api.createTest(testData)
        dispatch({
            type: CREATE_TEST,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const getTests = () => async (dispatch) => {
    try {
        const { data } = await api.fetchTests()
        dispatch({
            type: FETCH_ALL_TESTS,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const changeTestStatus = (id) => async (dispatch) => {
    try {
        const { data } = await api.changeTestStatus(id)
        dispatch({
            type: UPDATE_TEST,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateTest = (id, test) => async (dispatch) => {
    try {
        const { data } = await api.updatedTest(id, test)
        dispatch({
            type: UPDATE_TEST,
            payload: data
        })
    } catch (error) {
        console.log(error)
    }
}

export const deleteTest = (id) => async (dispatch) => {
    try {
        await api.deleteTest(id)
        dispatch({
            type: DELETE_TEST,
            payload: id
        })
    } catch (error) {
        console.log(error)
    }
}