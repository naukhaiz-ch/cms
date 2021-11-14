import { FETCH_ALL_MEDICINES } from "../constants/actionTypes"
import * as api from "../api"

// Action Creators
export const getMedicines = () => async (dispatch) => {
	try {
		const { data } = await api.fetchMedicines()
		dispatch({
			type: FETCH_ALL_MEDICINES,
			payload: data,
		})
	} catch (error) {
		console.log(error)
	}
}