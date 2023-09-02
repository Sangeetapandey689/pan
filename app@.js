const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));

// Separate /admin routes using a filter
app.use('/admin', adminRoutes);

// Use /shop route for all routes that call the shop.js file
app.use('/shop', shopRoutes);

// 404 Page
app.use((req, res, next) => {
  res.status(404).send('<h1>Page not found</h1>');
});

app.listen(3000);



