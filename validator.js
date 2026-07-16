const {getAll, getSingle, createUser, updateUser, deleteUser} = require('express-validator')

const { userValidationRules, validate } = require('./validator.js')
app.post('/user', userValidationRules(), validate, (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password,
    }).then(user => res.json(user))
})

module.exports = {
    userValidationRules,
    validate,
}