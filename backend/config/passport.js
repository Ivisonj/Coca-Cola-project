const { authSecret } = require('../.env')
const passport = require('passport') 
const passportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passportJwt

module.exports = app => {
    const params = {
        secretOrKey: authSecret,  
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() 
    }

    const userStrategy = new Strategy(params, (payload, done) => {
        app.db('users')
            .where({ id: payload.id })
            .first()
            .then(user => done(null, user ? {...payload} : false))
            .catch(err => done(err, false))
    })

    const companyStrategy = new Strategy(params, (payload, done) => {
        app.db('company')
            .where({ id: payload.id })
            .first()
            .then(company => done(null, company ? {...payload} : false))
            .catch(err => done(err, false))
    })

    passport.use(userStrategy)
    passport.use(companyStrategy)

    return {
        authenticate: () => passport.authenticate('jwt', { session: false })
    }
}