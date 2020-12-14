const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
    res.send(req.params);
});

router.get('/update/:modId', function(req, res, next) {
    res.send(req.params);
});

module.exports = router;