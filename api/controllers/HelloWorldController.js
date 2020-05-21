/**
 * HelloWorldController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    helloWorld: async function (req, res) {
        return res.ok("HelloWorld");
    }
};

