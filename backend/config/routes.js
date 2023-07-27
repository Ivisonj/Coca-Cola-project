const multer = require('multer')
const multerConfig = require('./multer')
const path = require('path')

module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.userAuth.signin)
    app.post('/validateToken', app.api.userAuth.validateToken)
    app.post('/recoverInformation', app.api.decodeToken.recoverUserInformation)

    app.post('/signup/company', app.api.company.save)
    app.post('/signin/company', app.api.companyAuth.signin)
    app.post('/companyValidateToken', app.api.companyAuth.companyValidateToken)
    
    app.route('/users')
        .all(app.config.passport.authenticate())
        .get(app.api.user.get)

    app.route('/users/:id')
        .all(app.config.passport.authenticate())        
        .get(app.api.user.getById)
        
    app.route('/companies')
        // .all(app.config.passport.authenticate())
        .get(app.api.company.get)

    app.route('/companies/:id')
        // .all(app.config.passport.authenticate()) 
        .put(app.api.company.save)       
        .get(app.api.company.getById)
        .delete(app.api.company.remove)
        
    app.route('/products')
        // .all(app.config.passport.authenticate())
        .post(app.api.product.save)        
        .get(app.api.product.get)

    app.route('/products/:id')
        // .all(app.config.passport.authenticate())
        .put(app.api.product.save)
        .get(app.api.product.getById)
        .delete(app.api.product.remove)

    app.route('/products/parentId/:id')
        // .all(app.config.passport.authenticate())
        .get(app.api.product.getByParentId)
    
    app.route('/upload')
        .post(multer(multerConfig).single('file'), (req, res) => {
            return res.json(req.file.filename)
        })

    app.route('/image/:imageName') 
        .get((req, res) => {
            const imageName = req.params.imageName
            const imagePath = path.join(__dirname, '..', 'public', `${imageName}.jpg`)
        
            res.sendFile(imagePath)
        })
}
