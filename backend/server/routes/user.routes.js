const userController = require("../controllers/user.controller")

module.exports = function(app){
    app.get('/api/users', userController.findAllUsers)
    app.post('/api/user', userController.makeUser)
}
