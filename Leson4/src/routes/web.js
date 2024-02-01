const express = require('express')
const { getHomePage, getAbc, getDemo, postCreateUser, getCreateUserPage } = require('../controllers/homeController')
const router = express.Router();

router.get('/', getHomePage)

router.get('/abc', getAbc)

router.get('/demo', getDemo)

router.get('/create', getCreateUserPage)

router.post('/create-user', postCreateUser)


module.exports = router;