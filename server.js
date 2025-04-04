const express = require('express')
const connectDB = require('./config/db')
const app = express()
// Connect Database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

//Define routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts')) 

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server start at port ${PORT}`))

app.get('/', (req,res) => res.json({msg:'pozz promena!!'}))