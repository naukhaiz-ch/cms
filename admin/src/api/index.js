import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:5001' })

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
        req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
    }
    return req
})


export const fetchUsers = (userRole) => API.get(`/users/${userRole}`)
export const signIn = (formData) => API.post('/users/signIn', formData)