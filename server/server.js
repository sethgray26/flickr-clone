require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const controller = require('./controller')
const s3Controller = require('./amazonS3')

const { SERVER_PORT, CONNECTION_STRING, SECRET, NODE_ENV } = process.env

const app = express()

app.use(express.json())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(async (req, res, next) => {
    if (NODE_ENV === 'development' && !req.session.user) {
        const db = req.app.get('db');
        const userArr = await db.find_user({ email: 's' })
        req.session.user = { id: userArr[0].user_id, email: userArr[0].email }
    }
    next()
})


massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
})


app.post('/api/register', controller.register)
app.post('/api/login', controller.login)
app.get('/api/profile', controller.userData)

app.post('/api/upload', controller.uploadPicture)
app.post('/api/s3-upload', s3Controller.s3Upload)

app.put('/api/bio', controller.updateBio)
app.get('/api/bio', controller.getBio)

app.listen(SERVER_PORT || 4050);
console.log(`${SERVER_PORT} Ducks Marching On Rome`);