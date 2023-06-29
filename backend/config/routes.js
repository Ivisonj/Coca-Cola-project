module.exports = app => {
    app.route('/users')
        .post(app.api.user.save)
        .get(app.api.user.get)

    app.route('/companies')
        .post(app.api.company.save)
        .get(app.api.company.get)
}