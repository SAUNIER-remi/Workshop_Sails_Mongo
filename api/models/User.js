module.exports = {
    attributes: {
        userName: {
            type: 'string',
            required: true,
            unique: true,
        },
        password: {
            type: 'string',
            required: true
        }
    }
};