const express = require('express');

const app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("app/img"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


var apiRoutes = require('./app/routing/apiRoutes')
app.use(apiRoutes);

var htmlRoutes = require('./app/routing/htmlRoutes');
app.use(htmlRoutes);


app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
