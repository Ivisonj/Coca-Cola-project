module.exports = app => {

    const { existsOrError } = app.api.validation

    const save = (req, res) => {
        const order = { ...req.body }

        app.db('orders')
            .insert(order)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get = (req, res) => {
        app.db('orders')
            .select('id', 'productName', 'price', 'amount', 'companyName', 'companyId', 'userName',  'userId', 'imageUrl')
            .then(order => res.json(order))
            .catch(err => res.status(500).send(err))
    }

    const getByCompanyId = (req, res) => {
        const companyId = req.params.id

        app.db('orders')
            .select('id', 'productName', 'price', 'amount', 'companyName', 'companyId', 'userName',  'userId', 'imageUrl')
            .where({ companyId:  companyId})
            .then(orders => res.json(orders))
            .catch(err => res.status(500).send(err))
    }

    const getByUserId = (req, res) => {
        const userId = req.params.id

        app.db('orders')
            .select('id', 'productName', 'price', 'amount', 'companyName', 'companyId', 'userName',  'userId', 'imageUrl')
            .where({ userId: userId })
            .then(orders => res.json(orders))
            .catch(err => res.status(500).send(err))
    }

    const remove = async (req, res) => {
        try {
            const rowsDeleted = await app.db('orders')
                .where({ id: req.params.id }).del()

                try {
                    existsOrError(rowsDeleted, 'Produto não foi encontrado')
                } catch(msg) {
                    return res.status(400).send(msg)
                }

                res.status(204).send()
        } catch(msg) {
            res.status(500).send(msg)
        }
    }

    return { save, get, getByCompanyId, getByUserId, remove }
}