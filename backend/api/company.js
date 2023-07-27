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
            const existEmailInDb = await app.db('company')
                .where({ email: company.email}).first()

            if(!company.id) {
                notExistsOrError(existEmailInDb, 'Usuário já cadastrado')
            }

        } catch(msg) {
            return res.status(400).send(msg)
        }

        company.password = encryptPassword(company.password)

        if(company.id) {
            app.db('company')
                .update(company)
                .where({ id: req.params.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('company')
                .insert(company)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('company')
            .select('id', 'name', 'email', 'address')
            .then(companies => res.json(companies))
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('company')
            .select('id', 'name', 'email', 'address')
            .where({ id: req.params.id })
            .whereNullable('deletedAt')
            .then(company => res.json(company))
            .catch(err => res.status(500).send(err))
    }

    const remove = (req, res) => {
        app.db('company')
            .where({ id: req.params.id }).del()
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getById, remove }
}