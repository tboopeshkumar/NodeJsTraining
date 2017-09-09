var  express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

var app = express();

app.use(allowCrossDomain);
   
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({type: 'text/plain'}));

//localhost:8000/
app.get('/', function (request, response) {
    response.sendfile('index.html');
});
//JSON
var achievements = [
    {
        title: 'Received Microsoft MVP Award',
        type: 'major',
        from:'Microsoft'
    },
    {
        title: 'Best trainer for Bank of America',
        type: 'major',
        from:'Bank of America'
    },
    {
        title: 'Approved as DotnetCurry author',
        type: 'major',
        from:'DotnetCurry'
    },
    {
        title: 'Mention on ASP.NET',
        type: 'medium',
        from:'asp.net'
    },
    {
        title: 'First article publised in Microsoft',
        type: 'minor',
        from:'Microsoft'
    },
    {
        title: 'Got a side project',
        type: 'minor',
        from:'Self'
    },
    {
        title: 'Boss patted me for my work',
        type: 'minor',
        from:'Boss'
    }
];


app.get('/api/achievements', function (request, response) {
    response.json(achievements);
});

app.post('/api/achievements', function(request, response){
    achievements.push(JSON.parse(request.body));
     response.json(achievements);
});


app.listen(8000, function () {
    console.log('Express server started  at 8000!!!');
});
