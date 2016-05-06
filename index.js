var express     = require("express"),
    fs          = require('fs'),
     bookings   = [],
     bodyParser = require("body-parser"),
     app        = express();


app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.set("view options", {layout: false});


app.get('/', function (req, res) {
    res.render('public/index.html');
});

app.get('/movies', function (req, res) {
    var movies = require('./data/movies.json');
    res.json(movies);
});

app.get('/bookings', function (req, res) {
    res.json(bookings);
});

app.post('/book', function (req, res) {
    var data = {
        'qty': req.body.qty,
        'date': req.body.date,
        'id': req.body.movie_id,
        'name': req.body.movie_name
    };
    bookings.push(data);
    res.json(bookings);
});

app.listen(process.env.PORT, process.env.IP);
console.log("Express server running");
