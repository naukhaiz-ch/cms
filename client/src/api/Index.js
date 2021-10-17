import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5001' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})


export const fetchUsers = (userRole) => API.get(`/users/${userRole}`)
export const fetchSingleUser = (id) => API.get(`/users/id/${id}`)
export const signIn = (formData) => API.post('/users/signIn', formData)
export const signUp = (formData) => API.post('/users/signUp', formData)

export const createAppointment = (newAppointment) => API.post('/appointments', newAppointment)
export const fetchAppointments = () => API.get('/appointments')
export const changeAppointmentStatus = (id) => API.patch(`/appointments/${id}/changeAppointmentStatus `)

export const createPrescription = (newPrescription) => API.post('/prescriptions', newPrescription)
export const fetchPrescriptions = () => API.get('/prescriptions')
export const changePrescriptionStatus = (id) => API.patch(`/prescriptions/${id}/changePrescriptionStatus `)