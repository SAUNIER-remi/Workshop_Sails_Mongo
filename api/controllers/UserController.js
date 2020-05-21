const bcrypt = require('bcrypt')
const jsonwebtoken = require('jsonwebtoken')

module.exports = {
    token: async function (req, res) {
        let params = req.allParams()
    
        let result = params.userName && params.password ? true : false
        if (!result) {
            return res.badRequest({ message: "Bad Request" })
        }
        try {
            let user = await User.findOne({ userName: params.userName })
            let result = await bcrypt.compare(params.password, user.password)
            if (!result)
                return res.status(401).send("Bad password")
            let token = await jsonwebtoken.sign({ user : user }, "votre clé secrète ici", { expiresIn: '7d' })
            return res.ok(token)
        } catch (err) {
            return res.serverError({ message: err.message })
        }
    },
    create: async function (req, res) {
        let params = req.allParams()
    
        let result = params.userName && params.password ? true : false
        if (!result) {
            return res.badRequest({ message: "Bad Request" })
        }
        let password_hash = await bcrypt.hash(params.password, 1);
        try {
            let user = await User.create({ userName: params.userName, password: password_hash })
            return res.ok(user)
        } catch (err) {
            return res.serverError({ message: err.message })
        }
    },
    getAllUsers: async function (req, res) {
        let users = await User.find({})
        return res.ok(users);
    },
    getUser: async function (req, res) {
        let params = req.allParams();
        let result = params.id ? true : false
        if (!result) {
            return res.badRequest({ message: "Bad Request" })
        }
        try {
            let user = await User.findOne({ id: params.id })
            if (user == null)
                return res.ok("User not found");
            return res.ok(user)
        } catch (err) {
            return res.serverError({ message: err.message })
        }
    } 
}