const express = require('express')
const app = express()
const port = 3000
// static files
app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname +'/views/index.html')
    // res.send('home-page') 
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname +'/views/about.html')
})

app.get('/photo', (req, res) => {
    res.sendFile(__dirname +'/views/photo.html')
})
app.get('/works', (req, res) => {
    res.sendFile(__dirname +'/views/works.html')
})
app.listen(port, () => {
console.log(`App is listenning on port ${port}`)
})
