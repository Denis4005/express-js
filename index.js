const express = require('express')

const userRouter = require('./routes/user.routes')
const postRoutes = require('./routes/post.routes')
const authRoutes = require('./routes/auth.routes')

const PORT = process.env.PORT || 3000

const app = express()

// app.get('/', (req, res) => {
//   res.send('hello pg')
// })

app.use(express.json())

app.use('/api', userRouter)
app.use('/api', postRoutes)
app.use('/auth', authRoutes)

const start = () => {
  try {
    app.listen(PORT, () => console.log('start serv'))
  } catch (err) {
    console.log(err)
  }
}
start()
