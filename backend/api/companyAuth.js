const { authSecret } = require('../.env')
const jwt = require('jwt-simple') 
const bcrypt = require('bcrypt-nodejs') 

module.exports = app => {
    const signin = async (req, res) => {

        const company = await app.db('company')
            .where({ email: req.body.email }).first()

        if(!company) return res.status(400).send('Empresa não encontrada')

        const isMatch = bcrypt.compareSync(req.body.password, company.password)
        if(!isMatch) return res.status(401).send('E-mail ou Senha inválidos')

        const now = Math.floor(Date.now() / 1000)

        const days = 100

        const payload = {
            id: company.id,
            name: company.name,
            email: company.email, 
            account: 'company',
            iat: now, 
            exp: now + (60 * 60 * 24 * days)
        }

        res.json({
            name: payload.name,
            account: payload.account,
            token: jwt.encode(payload, authSecret)
        })
    }

    const companyValidateToken = (req, res) => {
        const companyData = req.body || null

        try {
            if(companyData) {
                const token = jwt(jwt.decode(companyData.token, authSecret))
                if(new Date(token.exp * 1000) > new Date()) {
                    return res.send(true)
                }
            }
        } catch {

        }

        res.send(false)
    }

    return { signin, companyValidateToken }
}