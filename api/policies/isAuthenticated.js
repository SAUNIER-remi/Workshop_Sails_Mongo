const jsonwebtoken = require('jsonwebtoken')

module.exports = async function (req, res, next) {
    var bearerHeader = req.headers["authorization"];
    let user;

    if (bearerHeader)
        user = await jsonwebtoken.verify(bearerHeader, "votre clé secrète ici")
    if (!user)
        return res.status(401).json({ message: "Unauthorized token" })
    req.user = user.user
    next()
}