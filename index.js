// import expressjs
const express = require('express');
const app = express();

// import body-parser
const bodyParser = require('body-parser');
app.use(bodyParser.json());

// listen to port 3000 by default
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});