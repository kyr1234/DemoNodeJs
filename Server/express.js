const express = require('express')
const bodyparser = require('body-parser')
const morgan = require('morgan')
const app = express()
const port = 8000 || process.env.PORT

//WITH BODYPARSER YOU CAN TAKE THE TEXT AND DATA FROM REQUEST OTHERWISE THE DATA FROM REQ WOULD BE UNDEFINED

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(morgan())

const db = []

app.post('/todo', (req, res) => {
  const newtodo = {
    title: req.body.text,
    id: Date.now(),
  }
  db.push(newtodo)
  res.json(newtodo)
})

app.get('./todos', (req, res) => {
  res.json(db)
})

app.listen(port, () => {
  console.log('RUNNING ON PORT' + port)
})

//DYNAMIC REQUESTS

app.get('./todo/:id', (req, res) => {
  const todo = db.find((todoInDb) => {
    return todoInDb.id === +req.params.id
  })
  res.json({ data: todo })
})
