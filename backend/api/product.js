module.exports = app => {

    const save = (req, res) => {
        const product = { ...req.body }

        if(req.params.id) product.id = req.params.id

        if(product.id) {
            app.db('products')
                .update(product)
                .where({ id: product.id })
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        } else {
            app.db('products')
                .insert(product)
                .then(_ => res.status(204).send())
                .catch(err => res.status(500).send(err))
        }
    }

    const get = (req, res) => {
        app.db('products')
            .select('id', 'name', 'price', 'imageUrl', 'companyId') 
            .then(product => res.json(product)) 
            .catch(err => res.status(500).send(err))
    }

    const getByParentId = (req, res) => {
        const companyId = req.params.id
    
        app.db('products')
            .select('id', 'name', 'price', 'imageUrl', 'companyId')
            .where({ companyId: companyId }) 
            .then(products => res.json(products)) 
            .catch(err => res.status(500).send(err));
    }
    
    return { save, get, getByParentId }
}