const bcrypt = require('bcrypt-nodejs')

module.exports = app => {
    const { existsOrError, notExistsOrError, equalsOrError } = app.api.validation

    const encryptPassword = password => {
        const salt = bcrypt.genSaltSync(10)
        return bcrypt.hashSync(password, salt)
    }

    const save = async (req, res) => {
        const user = { ...req.body }

        try {
            const existEmailInDb = await app.db('users')
                .where({ email: user.email}).first()
            
            if(!user.id) {
                notExistsOrError(existEmailInDb, 'Usuário já cadastrado')
            }

        } catch(msg) {
            return res.status(400).send(msg)
        }

        user.password = encryptPassword(user.password)

        if(!user.id) {
            app.db('users')
                .insert(user)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'address', 'imageUrl') 
            .then(users => res.json(users)) 
            .catch(err => res.status(500).send(err))
    }

    const getById = (req, res) => {
        app.db('users')
            .select('id', 'name', 'email', 'address', 'imageUrl')
            .where({ id: req.params.id })
            .first()
            .then(user => res.json(user))
            .catch(err => res.status(500).send(err))
    }

    return { save, get, getById, }
}