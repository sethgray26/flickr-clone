const bcrypt = require('bcryptjs')
const aws = require('aws-sdk');
const { S3_BUCKET, AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY } = process.env


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

    updateBio: async (req, res) => {
        const { updateBio } = req.body
        const db = req.app.get('db')
        try {
            const bioUpdate = await db.update_bio({ user_bio: updateBio, user_id: req.session.user.id })
            req.session.user.user_bio = bioUpdate[0].user_bio
            res.status(200).send(req.session.user.user_bio)
        }
        catch (err) {
            console.log(err)
        }
    },

    getBio: async (req, res) => {
        const db = req.app.get('db')
        const userBio = await db.get_bio({ user_id: req.session.user.id })
        res.status(200).send(userBio)
    },

    getUserPictures: async (req, res) => {
        const db = req.app.get('db');
        const userPictures = await db.get_user_pictures({ user_id: req.session.user.id })
        res.status(200).send(userPictures)
    },

    uploadPicture: async (req, res) => {
        const { picture_name, url } = req.body;
        const id = req.session.user.id
        const db = req.app.get('db')
        const addPicture = await db.upload_picture({ user_id: id, picture_name: picture_name, picture_pic: url })
        console.log(addPicture)
        res.status(200).send(addPicture)
    },
    deleteUserPicture: async (req, res) => {
        const { picture_id } = req.params
        const db = req.app.get('db')
        const deleteUserPicture = await db.delete_user_picture({ picture_id: picture_id })
        const userPictures = await db.get_user_pictures({ user_id: req.session.user.id })
        // we do not need to send the deleteUserPicture in this case since we are not trying to send anything back with it
        // We just deleted the item that we are referencing so their is nothing to send back anyways
        res.status(200).send(userPictures)
    },

    s3Upload: (req, res) => {
        aws.config = {
            region: 'us-west-1',
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY,
        };

        const s3 = new aws.S3();
        const fileName = req.query['file-name'];
        const fileType = req.query['file-type'];
        const s3Params = {
            Bucket: S3_BUCKET,
            Key: fileName,
            Expires: 60,
            ContentType: fileType,
            ACL: 'public-read',
        };

        s3.getSignedUrl('putObject', s3Params, (err, data) => {
            if (err) {
                console.log(err);
                return res.end();
            }
            const returnData = {
                signedRequest: data,
                url: `https://${S3_BUCKET}.s3.amazonaws.com/${fileName}`,
            };

            return res.send(returnData);
        });
    },

    userData: (req, res) => {
        if (req.session.user) {
            res.status(200).send(req.session.user)
        } else (
            res.status(401).send('Please Log In.')
        )
    }
} 