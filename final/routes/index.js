var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {title: "Tommy@@@@"});
});
// home page
router.get('/', function(req, res, next) {

    var db = req.con;
    var data = "";

    db.query('SELECT * FROM dept', function(err, rows) {
        if (err) {
            console.log(err);
        }
        var data = rows;
        console.log(rows);
        // use index.ejs
        res.render('index', { title: 'Employee Information', data: data});
    });

});
module.exports = router;
