const User = require("../models/user.model")

module.exports.makeUser = (req, res) => {

    console.log(req)
    User.create(req.body)
        // .exec(function(err,docs){
        //     res.json(docs)})
        .then(newUser => res.json(newUser))
        .catch(err => res.json(err));

}

module.exports.findAllUsers = (req, res) => {

    User.find().sort('seconds').limit(10)
        .then(users => res.json(users))
        .catch(err => response.json(err))
}

