var express = require('express'),
	Q = require('q');

var app = express();
app.use(express.logger());

app.all('/:returnCode', function(req, res){
	res.send(Number(req.params.returnCode));
});



//Blatant copy from balance server
/*
	Catch all default
*/
app.all('*', function(req, res, next){
	console.warn("No controller took responsibility for "+req.method+" : "+req.originalUrl);
	res.send(404);
});

app.listen(process.env.PORT || 80);
