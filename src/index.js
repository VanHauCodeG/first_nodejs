const path = require('path');
const morgan = require('morgan')
const express = require('express')
const { engine } = require('express-handlebars'); 
const app = express();
const port = 3000;

const route = require('./routes');
const db = require('./config/db');db

//connect to db
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//HTTP log
app.use(morgan('combined'))

//Template engine Hadlebars 
app.engine('hbs', engine({
  extname: '.hbs'
})); 
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'));

//Routes init 
route(app);

//Status
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});