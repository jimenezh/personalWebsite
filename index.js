var express = require('express');
var app =express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res){
	res.render('home.ejs')
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});