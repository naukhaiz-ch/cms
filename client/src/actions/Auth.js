import { AUTH } from '../constants/actionTypes'
import * as api from '../api/Index'

export const signIn = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData)

        dispatch({
            type: AUTH,
            data
        })
        if (JSON.stringify(data.message)) {
            alert(JSON.stringify(data.message))
        }
        else {
            history.push('/')
            window.location.reload()
        }


    } catch (error) {
        console.log(error)
    }
}

export const signUp = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData)
        dispatch({
            type: AUTH,
            data
        })

        history.push('/')
        window.location.reload()
    } catch (error) {
        console.log(error)
    }
}