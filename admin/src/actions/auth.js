import { AUTH } from '../constants/actionTypes'
import * as api from '../api'

export const signIn = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData)

        if (data?.result?.userRole === 'admin') {
            dispatch({
                type: AUTH,
                data
            });
            history.push('/dashboard')
        } else {
            alert('Try To Sign In Again..')
            history.push('/')
        }


    } catch (error) {
        console.log(error)
    }
}