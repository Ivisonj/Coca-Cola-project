const { authSecret } = require('../.env')
const jwt = require('jwt-simple')

module.exports = app => {
    const recoverUserInformation = (req, res) => {

        const userData = jwt.decode(req.body.token, authSecret)

        res.json({id: userData.id, name: userData.name})
    }
    return { recoverUserInformation }
}