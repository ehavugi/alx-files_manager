const express = require('express');
const app = express();
const port  = process.env.PORT || 5000;

app.use(express.json());

const routes = require('./routes');
app.use('/', routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
