module.exports = {
    attributes: {
        title: {
            type: 'string',
            defaultsTo: "",
            required: false
        },
        body: {
            type: 'string',
            defaultsTo: "",
            required: false
        },
        user: {
            model: 'User',
          required: false
        },
    }
}