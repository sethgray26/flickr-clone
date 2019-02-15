const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const { first_name, last_name, email, password } = req.body;
        const db = req.app.get('db');
        const userArr = await db.find_user({ email: email })
        if (userArr.length !== 0) {
            return res.status(200).send({ message: 'Email Already In Use' })
        }
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt);
        let newUserArr = await db.create_user({ first_name: first_name, last_name: last_name, email: email, hash: hash })
        req.session.user = { id: newUserArr[0].user_id, first_name: newUserArr[0].first_name, last_name: newUserArr[0].last_name, email: newUserArr[0].email }
        res.status(200).send({
            mess: 'Account Created Successfully!', userData: {
                ...req.session.user, profile_pic:
                    'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/820/s200/dev-mountain-logo.png'
            }, loggedIn: true
        })
    },
    login: async (req, res) => {
        const { first_name, last_name, email, password } = req.body;
        const db = req.app.get('db');
        const userArr = await db.find_user({ email: email })
        if (!userArr[0]) {
            return res.status(200).send({ message: 'Email not found' })
        }
        const result = bcrypt.compareSync(password, userArr[0].password)
        if (!result) {
            return res.status(401).send({ message: 'Invalid Password' })
        }
        req.session.user = { id: userArr[0].user_id, email: userArr[0].email }
        res.status(200).send({
            message: 'Logged In', userData: {
                ...req.session.user, profile_pic:
                    'https://course_report_production.s3.amazonaws.com/rich/rich_files/rich_files/820/s200/dev-mountain-logo.png'
            }, loggedIn: true
        })
    },
    uploadPicture: async (req, res) => {
        const { picture_name, picture_pic, user_id } = req.body;
        const db = req.app.get('db')
        const addPicture = await db.upload_picture({ user_id: user_id, picture_name: picture_name, picture_pic: picture_pic })
        console.log(addPicture)
        res.status(200).send(addPicture)
    },
    userData: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else (
            res.status(401).send('Please Log In.')
        )
    }
}