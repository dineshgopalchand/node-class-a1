var express = require('express');
// var app = express();
var router = express.Router();
var path = require('path');


router.get('/users/:userid', (req, res, next) => {
    console.log('form user with name', req.query);
    res.sendFile(path.join(__dirname, 'view', 'admin', 'users.html'));
});
router.get('/users', (req, res, next) => {
    console.log('form user', req.query);
    res.sendFile(path.join(__dirname, 'view', 'admin', 'users.html'));
});

router.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'view', 'admin', 'admin.html'));
});


module.exports = router;