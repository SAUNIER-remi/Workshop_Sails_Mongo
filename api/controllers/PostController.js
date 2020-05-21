module.exports = {
    create: async function (req, res) {
        let params = req.allParams()
    
        let result = req.user && params.title && params.body ? true : false
        if (!result) {
            return res.badRequest({ message: "Bad Request" })
        }
        try {
            await Post.create({ user: req.user.id, title: params.title, body: params.body })
            return res.ok()
        } catch (err) {
            return res.serverError({ message: err.message })
        }
    },
    destroy: async function (req, res) {
        let params = req.allParams()
    
        let result = params.id && params.user ? true : false
        if (!result) {
            return res.badRequest({ message: "Bad Request" })
        }
        try {
            post = Post.find({ id: params.id })
            if (post.user == user.id) {
                await Post.destroy({ id: params.id })
                return res.ok()
            } else
                return res.status(401).json({ message: "Is not your post" })
        } catch (err) {
            return res.serverError({ message: err.message })
        }
    },
    getAllPost: async function (req, res) {
        let posts = await Post.find({})
        return res.ok(posts);
    },
    myPost: async function (req, res) {
        let posts = await Post.find({ user : req.user.id });
        return res.ok(posts)
    }
}