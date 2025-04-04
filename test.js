const express = require ('express')

const app = express()

const PORT = 3000

//init server

app.listen(PORT, () => console.log('server radi'))


//GET

app.get('/test',(req, res) =>

res.send('proslo'))


//POST

app.post('/test', function(req, res){

    res.send('poslato')
} )

