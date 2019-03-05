require('dotenv').config()
const express = require('express')
const massive = require('massive')
const session = require('express-session')
const controller = require('./controller')


const { SERVER_PORT, CONNECTION_STRING, SECRET, NODE_ENV } = process.env

const app = express()

app.use(express.json())
app.use(session({
    secret: SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(express.static(`${__dirname}/../build`));

app.use(async (req, res, next) => {
    if (NODE_ENV === 'development' && !req.session.user) {
        const db = req.app.get('db');
        const userArr = await db.find_user({ email: `s` })
        req.session.user = { id: userArr[0].user_id, email: userArr[0].email, first_name: userArr[0].first_name, last_name: userArr[0].last_name }
    }
    next()
})


massive(CONNECTION_STRING).then((db) => {
    app.set('db', db)
})


app.post('/api/register', controller.register)
app.post('/api/login', controller.login)
app.get('/api/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/')
})

app.get('/api/favorites', controller.getFavorites)
app.post('/api/favorites', controller.addUserFave)
app.delete('/api/favorites/:picture_id', controller.deleteFavorite)

app.get('/api/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/')
})


app.get('/api/profile', controller.userData)



app.put('/api/bio', controller.updateBio)
app.get('/api/bio', controller.getBio)


app.get('/api/userPictures', controller.getUserPictures)
app.delete('/api/userPictures/:picture_id', controller.deleteUserPicture)

app.post('/api/upload', controller.uploadPicture)
app.get('/api/upload', controller.s3Upload)



app.listen(SERVER_PORT || 4050);
console.log(`${SERVER_PORT} Ducks Marching On Rome`);