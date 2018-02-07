var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use(express.static('public'))


var slips = require('./services/array')
var nyhed = require('./services/nyhed')

app.get('/', function(req, res){
    res.render('pages/hjem', {
        nyhed:nyhed
    });
});

app.get('/om', function(req, res) {
    res.render('pages/om', {
        slips:slips
    });
});

app.get('/garanti', function(req, res) {
    res.render('pages/garanti', {
        slips:slips
    });
});

app.get('/kontakt', function(req, res) {
    res.render('pages/kontakt', {
        slips:slips
    });
});

app.get('/nyheder', function(req, res) {
    res.render('pages/nyheder', {
        slips:slips,
        nyhed:nyhed
    });
});

app.get('/produkt', function(req, res) {
    res.render('pages/produkt', {
        slips:slips
    });

});

app.listen(4040);
console.log('4040 is the magic port');