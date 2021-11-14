import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'

const API = axios.create({ baseURL: 'https://doccure-server.herokuapp.com' });

const retriveUserProfile = async () => {
    const userProfile = await AsyncStorage.getItem('profile');
    return JSON.parse(userProfile)
}

export const signIn = (formData) => API.post('/users/signIn', formData)
export const signUp = (formData) => API.post('/users/signUp', formData)


export const fetchUsers = (userRole) => API.get(`/users/${userRole}`)
export const fetchAllUsers = () => API.get('/users')
export const fetchSingleUser = (id) => API.get(`/users/id/${id}`)

export const fetchAppointments = () => API.get('/appointments')

export const fetchTests = () => API.get('/tests')

export const fetchPrescriptions = () => API.get('/prescriptions')

export const fetchMedicines = () => API.get('/medicines')