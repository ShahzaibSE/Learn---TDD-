'use strict'

const express = require('express');
const path = require('path');

//Express Instance.
const app = express();

var port = process.env.PORT | 3002;

var server = app.listen(port,function(){
    console.log(`Listening on: ${server.address().port}`);
});
