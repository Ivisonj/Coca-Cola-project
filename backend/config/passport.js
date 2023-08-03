const { authSecret } = require('../.env')
const passport = require('passport') 
const passportJwt = require('passport-jwt')
const { Strategy, ExtractJwt } = passportJwt

module.exports = app => {
    const params = {
        secretOrKey: authSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    }

    const strategy = new Strategy(params, (payload, done) => {
        if(payload.account === 'user') {
            app.db('users')
                .where({ id: payload.id })
                .first()
                .then(user => done(null, user ? { ...payload } : false))
                .catch(err => done(err, false))
            } else {
                app.db('companies')
                    .where({ id: payload.id })
                    .first()
                    .then(company => done(null, company ? { ...payload } : false))
                    .catch(err => done(err, false))
        }
    })

    passport.use(strategy)

    return {
        authenticate: () => passport.authenticate('jwt', { session: false })
    }
}
