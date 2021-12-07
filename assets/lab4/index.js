const express = require('express'),
  app = express()

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.listen(3000, () => {
  console.log('App started')
})