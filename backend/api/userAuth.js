const { authSecret } = require('../.env')
const jwt = require('jwt-simple') 
const bcrypt = require('bcrypt-nodejs') 

module.exports = app => {
    const signin = async (req, res) => {

        const user = await app.db('users')
            .where({email: req.body.email}).first()

        if(!user) return res.status(400).send('Usuário não encontrado')

        const isMatch = bcrypt.compareSync(req.body.password, user.password)
        if(!isMatch) return res.status(401).send('E-mail ou Senha inválidos')

        const now = Math.floor(Date.now() / 1000)

        const days = 100

        const payload = {
            id: user.id, 
            name: user.name,
            email: user.email,
            account: 'user',
            iat: now,
            exp: now + (60 * 60 * 24 * days)
        }

        res.json({
            id: payload.id,
            name: payload.name,
            account: payload.account,
            token: jwt.encode(payload, authSecret)
        })
    }

    const validateToken = (req, res) => {
        const userData = req.body || null

        try {
            if(userData) {
                const token = jwt.decode(userData.token, authSecret)
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch(e) {

        }

        res.send(false)
    }

    return { signin, validateToken }
}