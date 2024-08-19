const connectTOMongo = require('./db')
const express = require('express')
connectTOMongo();

const app = express()
const port = 5000
//Available routes

app.use(express.json())
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes' , require('./routes/notes'))

app.listen(port, () => {
  console.log(`MyNoteBook backend listening on port ${port}`)
})
