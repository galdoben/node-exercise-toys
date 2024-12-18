const toys = require('./data/toys');
const express = require('express');
const toysRouter = require('./routers/toys.js')
const app = express();
const port = 3000;

app.get('/', (req,res) => {
  res.send('server dei giocattoli')
})
app.use('/toys', toysRouter)

app.listen(port, () => {
  console.log('funziono')
})



