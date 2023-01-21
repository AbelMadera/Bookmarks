const router = require('express').Router()
const userCtrl = require('../../controllers/api/users')
const checkToken = require('../../config/checkToken')
const ensureLoggedIn = require('../../config/ensureLoggedIn')

/*
/api/users
SignUp
*/
router.post('/', userCtrl.signUp, userCtrl.respondWithToken)
/*
/api/users/login
Login
*/
router.post('/login', userCtrl.login, userCtrl.respondWithToken)
/*
/api/users/bookmarks
get bookmarks by user
*/
router.get('/bookmarks', checkToken, ensureLoggedIn, userCtrl.getBookmarksByUser, userCtrl.respondWithBookmarks)

module.exports = router