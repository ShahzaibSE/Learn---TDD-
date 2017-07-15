/**
 * Created by shahzaibnoor on 10/07/2017.
 */

var app = require('./app');  //NodeJS - ExpressJS App Instance.


//---------------------Server Configuration----------------------//
var port = process.env.PORT | 3003;
var server = app.listen(port,function(){
    console.log(`Listening on : ${server.address().port}`);
});
//---------------------------------------------------------------//
