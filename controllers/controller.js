const { User } = require('../models/index');

class Controller {
    // router.post('/user', Controller.createUser);
    static createUser (res, req) {
        let { username } = req.body
        let input = {
            username,
            room: 1
        }
        User.create(input)
            .then(data => {
                res.send(201).json({
                    user: data
                })
            })
            .catch(err => {
                res.send(500).json({
                    message: err.message
                })
            })
    }

}

module.exports = Controller