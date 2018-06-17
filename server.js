const express = require('express')
const app = express()
const port = 3000

app.get('/',(request, response) => {
    response.send('wheelsandbytes homepage')
})

app.get('/auto',(request, response) => {
    response.send('auto stuff route')
})

app.get('/comp',(request, response) => {
    response.send('comp stuff route')
})

app.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log('server is listening on port',port)
})
