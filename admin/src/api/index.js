import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5001' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})

export const fetchUsers = (userRole) => API.get(`/users/${userRole}`)
export const fetchAllUsers = () => API.get('/users')
export const fetchSingleUser = (id) => API.get(`/users/id/${id}`)
export const changeUserStatus = (id) => API.patch(`/users/${id}/changeUserStatus `)
export const signIn = (formData) => API.post('/users/signIn', formData)

export const createAppointment = (newAppointment) => API.post('/appointments', newAppointment)
export const fetchAppointments = () => API.get('/appointments')
export const changeAppointmentStatus = (id) => API.patch(`/appointments/${id}/changeAppointmentStatus `)
export const updatedAppointment = (id, updatedAppointment) => API.patch(`/appointments/${id}`, updatedAppointment)

export const createTest = (newTest) => API.post('/tests', newTest)
export const fetchTests = () => API.get('/tests')
export const changeTestStatus = (id) => API.patch(`/tests/${id}/changeTestStatus `)
export const updatedTest = (id, updatedTest) => API.patch(`/tests/${id}`, updatedTest)

export const createPrescription = (newPrescription) => API.post('/prescriptions', newPrescription)
export const fetchPrescriptions = () => API.get('/prescriptions')
export const changePrescriptionStatus = (id) => API.patch(`/prescriptions/${id}/changePrescriptionStatus `)

export const createMedicine = (newMedicine) => API.post('/medicines', newMedicine)
export const fetchMedicines = () => API.get('/medicines')


export const setUserKey = (id, setUserKey) => API.patch(`/users/${id}/setUserKey`, setUserKey)