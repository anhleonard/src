let User = require('../models/user');

let userController = {
    infoUsers: async (req, res) => {
        let body = req.body;
        res.json(body);
    }
}