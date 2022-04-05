const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
        res.send('hello world!!')
});


app.get('/api/courses', (req, res) => {
        let body = req.body;
        var bodyParser = require('body-parser');
        var request = require('request');
        let srDate = req.param('SR-DT');

console.log("aaa >> " + srDate);

        request.get({
                url:'https://jsonplaceholder.typicode.com/todos/1'
        //      url:'https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json'
        }, function (error, response, body) {
                if(body != null) {
                        res.json(body);
                }else {
                        res.status(404);
                        res.json({success:flase, errormessage:'jejuServer Error'});
                }
        });

});

app.get('/api/test', (req, res) => {

        var url = require('url');

        var parsedURL = url.parse('http://jsonplaceholder.typicode.com/todos/1');

        res.json(parsedURL);
});

app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
});