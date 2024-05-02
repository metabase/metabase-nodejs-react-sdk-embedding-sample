const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello from our server!')
})

app.listen(9090, () => {
  console.log('server listening on port 9090')
})
