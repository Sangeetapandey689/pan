const express = require('express');
const router = express.Router();

// Define your /shop routes here
router.get('/', (req, res, next) => {
  res.send('<h1>Hello from the Shop!</h1>');
});

// Add more /shop routes as needed

module.exports = router;
