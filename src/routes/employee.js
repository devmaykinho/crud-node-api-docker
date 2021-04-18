const express = require('express')
const router = express.Router()
const employee = require('../controllers/employee')

router.get('/', employee.find)
router.get('/:id', employee.findOne)
router.post('/', employee.create)
router.patch('/:employeeId', employee.update)
router.delete('/:employeeId', employee.remove)

module.exports = router