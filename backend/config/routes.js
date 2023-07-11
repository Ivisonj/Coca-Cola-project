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
        .all(app.config.passport.authenticate())
        .get(app.api.company.get)

    app.route('/companies/:id')
        .all(app.config.passport.authenticate())        
        .get(app.api.company.getById)
}