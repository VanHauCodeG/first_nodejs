const path = require('path')
const morgan = require('morgan')
const express = require('express')
const { engine } = require('express-handlebars'); 
const app = express();
const port = 3000;

//HTTPP log
app.use(morgan('combined'))

//Template engine Hadlebars 
app.engine('hbs', engine({
  extname: '.hbs'
})); 
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'));

//Home page
app.get('/', (req, res) => {
  res.render('home');
});

//News page
app.get('/news', (req, res) => {
  res.render('news');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});