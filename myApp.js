let express = require('express');
let app = express();

console.log("Hello World"); // This will show up in Render's logs

// Optional route if you want the browser to see something too
app.get('/', (req, res) => {
  res.send('App is running');
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running on port " + port);
});




































 module.exports = app;
