module.exports = app => {
    app.post('/signup', app.api.user.save)
    app.post('/signin', app.api.userAuth.signin)
    app.post('/validateToken', app.api.userAuth.validateToken)
    
    app.post('/signup/company', app.api.company.save)
    app.post('/signin/company', app.api.companyAuth.signin)
    app.post('/companyValidateToken', app.api.companyAuth.companyValidateToken)
    
    app.route('/users')
        .all(app.config.passport.authenticate())
        .get(app.api.user.get)

    app.route('/companies')
        .all(app.config.passport.authenticate())
        .get(app.api.company.get)
}