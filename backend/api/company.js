const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const company = { ...req.body }

        if(req.params.id) company.id = req.params.id

        try {
            const existEmailInDb = await app.db('companies')
                .where({ email: company.email}).first()

            if(!company.id) {
                notExistsOrError(existEmailInDb, 'Usuário já cadastrado')
            }

        } catch(msg) {
            return res.status(400).send(msg)
        }

        if(company.id) {
            if(req.params.password) {
                delete company.password
            }

            app.db('companies')
                .update(company)
                .where({ id: req.params.id })
                .whereNull('deletedAt')
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            company.password = encryptPassword(company.password)

            app.db('companies')
                .insert(company)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('companies')
            .select('id', 'name', 'email', 'address', 'imageUrl')
            .whereNull('deletedAt')
            .then(companies => res.json(companies))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('companies')
            .select('id', 'name', 'email', 'address', 'imageUrl')
            .where({ id: req.params.id })
            .whereNull('deletedAt')
            .then(company => res.json(company))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            const rowsUpdated = await app.db('companies')
                .update({ deletedAt: new Date() })
                .where({ id: req.params.id })
            existsOrError(rowsUpdated, 'Empresa não encontrada')

            res.status(204).send()
        } catch(msg) {
            res.status(400).send(msg)
        }
    }

    return { save, get, getById, remove }
}