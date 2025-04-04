const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {

  
    mongoose.connect(db, { 
        useUnifiedTopology: true,
        useNewUrlParser: true,
       // useCreateIndex: true,
        // useFindAndModify: false
    })
    .then(() => console.log('Mongo db connected'))
    .catch(err  => {console.error(err.message)
    process.exit(1)
    
    })
   }

   module.exports = connectDB
