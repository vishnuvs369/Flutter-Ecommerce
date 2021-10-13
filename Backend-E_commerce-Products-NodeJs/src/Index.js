const express = require('express');
const path = require('path');
const http = require('http');
const port = 7070;

require('dotenv').config();

const app = express();


// Middleware
app.use( express.json() );
app.use( express.urlencoded({ extended: false }) );


// Routes
app.use( require('./Routes/route') );


// This folder will be Public
app.use( express.static( path.join( __dirname, 'Uploads/Profile') ));
app.use( express.static( path.join( __dirname, 'Uploads/Home' )));
app.use( express.static( path.join( __dirname, 'Uploads/Products' )));
app.use( express.static( path.join( __dirname, 'Uploads/Categories' )));



// Puerto - Listen 
//PORT 7070 
app.listen( port, () => console.log('Listen on port ' + port) );

