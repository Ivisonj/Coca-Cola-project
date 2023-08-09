module.exports = app => {
    const save = (req, res) => {
        const order = { ...req.body }

        app.db('orders')
            .insert(order)
            .then(_ => res.status(204).send())
            .catch(err => res.status(500).send(err))
    }

    const get = (req, res) => {
        app.db('orders')
            .select('id', 'productName', 'price', 'amount', 'companyId', 'userId')
            .then(order => res.json(order))
            .catch(err => res.status(500).send())
    }

    const getByCompanyId = (req, res) => {
        const companyId = req.params.id

        app.db('orders')
            .select('id', 'productName', 'price', 'amount', 'companyId', 'userId')
            .where({ companyId:  companyId})
            .then(orders => res.json(orders))
            .catch(err => res.status(500).send(err))
    }

    const getByUserId = (req, res) => {
        const userId = req.params.id

        app.db('orders')
            .select('id', 'productName', 'price', 'amount', 'companyId', 'userId')
            .where({ userId: userId })
            .then(orders => res.json(orders))
            .catch(err => res.status(500).send())
    }
    return { save, get, getByCompanyId, getByUserId }
}