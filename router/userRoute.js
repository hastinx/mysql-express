const { userController } = require('../controllers')

const router = require('express').Router()

router.get('/users', userController.getAll)
router.get('/users/:id', userController.getById)
router.patch('/users/:id', userController.patchUsers)
router.post('/users', userController.addUsers)
router.delete('/users/:id', userController.deleteUsers)

module.exports = router

