import express from 'express'
const router = express.Router()
import auth from '../middleware/auth.js'

import { signIn, signUp, getUsers, getSingleUser, updateUser, deleteUser, changeUserStatus, setUserKey, addUserCredits } from '../controllers/users.js'

router.post('/signIn', signIn)
router.post('/signUp', signUp)
router.get('/:userRole', getUsers)
router.get('/id/:id', getSingleUser)
router.patch('/:id', auth, updateUser)
router.delete('/:id', auth, deleteUser)
router.patch('/:id/changeUserStatus', auth, changeUserStatus)
router.patch('/:id/setUserKey', auth, setUserKey)
router.patch('/:id/addUserCredits', auth, addUserCredits)

export default router