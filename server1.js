const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/',(req,res,next) => {
  console.log('This always run!');
  next();
})
app.post('/add-product',(req, res, next) => {
  console.log(' In another middleware!');
  res.send('<form action="/product" method="POST">Input type="text" name="title"><button type="submit">Add product</button></form>');
});
app.use('/product',(req, res, next) => {
  console.log(req,body);
  res.redirect('/');
});


app.use('/',(req, res, next) => {
  console.log(' In another middleware!');
  res.send('<h1>Hello from Express!</h1>');
});

// const server = http.createServer(app);

// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });
app.listen(3000);


