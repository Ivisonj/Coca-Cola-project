const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const company = { ...req.body }

        try {
            existsOrError(company.name, 'Nome não informado')
            existsOrError(company.email, 'E-mail não informado')
            existsOrError(company.password, 'Senha não informada')
            existsOrError(company.confirmPassword, 'Confirmação de senha inválida')
            equalsOrError(company.password, company.confirmPassword, 'Senhas não conferem')
            existsOrError(company.address, 'Endereço não informado')
            
            const checkEmailFromDB = await app.db('company')
                .where({ email: company.email}).first()

            if(!company.id) {
                notExistsOrError(checkEmailFromDB, 'Usuário já cadastrado')
            }

        } catch(msg) {
            return res.status(400).send(msg)
        }

        company.password = encryptPassword(company.password)
        delete company.confirmPassword

        if(!company.id) {
            app.db('company')
                .insert(company)
                .then(_ => res.status(240).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('company')
            .select('id', 'name', 'email', 'address')
            .then(companies => res.json(companies))
            .catch(err => res.status(500).send(err))
    }

    return { save, get }
}