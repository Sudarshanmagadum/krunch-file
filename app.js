const express = require('express')
const app = express();
const path = require('path')
const hbs = require('hbs')

const stylepath = path.join('./style')
hbs.registerPartials(stylepath)

app.set('view engine', 'hbs')
app.set('views')


app.get('/', (req, res) => {
    res.render('home')
})

app.listen(3000,() => {
    console.log('listening to the port');
})