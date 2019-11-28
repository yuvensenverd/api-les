
// const { User, Sequelize, sequelize, School, Project, Payment, Subscription, scholarship, Student } = require('../models');
// const Op = Sequelize.Op
const {User, Sequelize} = require('../models');
const Op = Sequelize.Op;
const { createJWTToken, createForgotPasswordToken } = require('../helpers/jwtoken');
const { transporter } = require('../helpers/mailer')
const Crypto = require('crypto');

const { UI_LINK } = require('../helpers/urlapi')

// FOR EMAILER
// const path=require('path')
// const fs =require('fs')
// const {emailer}=require('../helpers/mailer')
// const {pdfcreate}=require('../helpers/pdfcreate')

const moment=require('moment')





module.exports = {
    
    //Register, Login, KeepLogin, Reset Password / Forgot Password, Change Password, Login Gmail, Login Facebook
    registerUser : (req, res) => {
      console.log(req.body)
      const { firstName, lastName, email, phone, password} = req.body
      User.findOne({
            where: {email}
      }).then((result)=>{
        //   console.log(result)
          if(!result){

              User.create({
                firstName,
                lastName,
                email,
                password:  Crypto.createHmac('sha256', 'ngelesapi').update(password).digest('hex'),
                phone,
              }).then((results)=>{
                console.log(results)
                console.log(results.dataValues)
                const tokenJwt = createJWTToken({ id: results.dataValues.id, email: results.dataValues.email })
                console.log(tokenJwt)

                let linkVerifikasi = `${UI_LINK}/verification?tkn=${tokenJwt}`;
                                
                //untuk live
                //let linkVerifikasi = `https://sharex.purwadhikax.com/verified?t${tokenJwt}`
        
                let mailOptions = {
                    from: 'ngeles.co Admin <operational@ngeles.co>',
                    to: email,
                    subject: 'Verifikasi Email for NGELES.CO',
                    html: `
                            <div>
                                <hr />
                                <h4>Link Verification</h4>
                                <p>This is a link verification for Email: <span style='font-weight:bold'>${email}</span>.</p>
                                <p>To verification your account <a href='${linkVerifikasi}'>Click Here!</a></p>
                                <hr />
                            </div>`
                }

                transporter.sendMail(mailOptions, (err1, res1) => {
                    if (err1) {
                        console.log(err1)
                        return res.status(500).send({ status: 'error', err: err1 })
                    }
                    console.log('succ!?')
                    console.log(res1)

                    return res.status(200).send({
                        result: results.dataValues,
                        token: tokenJwt
                    });

                })
                //  console.log(results)
              }).catch((error)=>{
                  console.log(error)
                  return res.status(500).send({message : 'theres an error', error })
              })
          }else {
                return res.status(500).send({message : 'theres an error', error : 'User with that email already exist !' })
          }
      
      }).catch((error)=>{
        console.log(error)
            return res.status(500).send({message : 'theres an error', error })
      })
     
    //   return res.status(200).send({message : 'success', result })
    },

    keepLogin: (req, res) => {
        User.findOne({
            where: {
                email: req.user.email
            }
        })
        .then((result) => {
            const tokenJwt = createJWTToken({ id: result.dataValues.id, email: result.dataValues.email })
            return res.status(200).send({
                result: result.dataValues, 
                token: tokenJwt
            })
        })
        .catch((err) => {
            console.log(error)
            return res.status(500).send({message : 'theres an error', error })
        })
    },

    verifyUser : (req,res)=>{
        console.log('masuk api')
        console.log(req.user)
        const { id , email } = req.user
        User.findOne({
              where: {email}
        })
        .then((result)=>{
            console.log('verified')
            console.log(result)
            User.update(
                {
                    isVerified: 1
                },
                {
                    returning: true,
                    where:
                     {
                         id,
                         email,
                     }
                }
              ).then((results)=>{
                  console.log('ini dreuslts')
                  const tokenJwt = createJWTToken({ id: result.dataValues.id, email: result.dataValues.email })
                    // console.log(results)
                    delete result.dataValues.password
                    return res.status(200).send({
                        message : 'success', results : result.dataValues, token : tokenJwt
                    });
              }).catch((errors)=>{
                console.log(errors)
                return res.status(500).send({message : 'theres an error', errors })
              })
        })
        .catch((error)=>{
            console.log(error)
            return res.status(500).send({message : 'theres an error', error })
        })
    },
    resendVerification : (req,res)=>{
        const {
            id,
            email
        } = req.user

        const {
            token
        } = req.body        

        let linkVerifikasi = `${UI_LINK}/verification?tkn=${token}`;
                        
        //untuk live
        //let linkVerifikasi = `https://sharex.purwadhikax.com/verified?t${tokenJwt}`

        let mailOptions = {
            from: 'ngeles.co Admin <operational@ngeles.co>',
            to: email,
            subject: 'Verifikasi Email for NGELES.CO',
            html: `
                    <div>
                        <hr />
                        <h4>Link Verification</h4>
                        <p>This is a link verification for Email: <span style='font-weight:bold'>${email}</span>.</p>
                        <p>To verification your account <a href='${linkVerifikasi}'>Click Here!</a></p>
                        <hr />
                    </div>`
        }

        transporter.sendMail(mailOptions, (err1, res1) => {
            if (err1) {
                console.log(err1)
                return res.status(500).send({ status: 'error', err: err1 })
            }
            console.log('succ!?')
            console.log(res1)

            return res.status(200).send({
                message : ' success'
            });

        })
    },

    getStatus:(req,res)=>{
        
        console.log(req)
        console.log(res)
        console.log('========masuk getStatus =============')
    },

    loginWithGoogle: (req, res) => {
        let encryptGoogleId = Crypto.createHmac('sha256', 'apingelescoGoogleId_api')
                                    .update(req.body.data.googleId).digest('hex')

        User.findOne({
            where: {
                email: req.body.data.email,
                googleId: encryptGoogleId,

            }
        })
        .then((results) => {
            console.log(results)
            if(results !== null) {
                // Kalo sudah pernah mendaftar dengan email google, dan user ingin mencoba
                // login lewat gmail, maka muncul errornya

                const tokenJwt = createJWTToken({ userId: results.dataValues.id, email: results.dataValues.email })

                        // console.log(dataUser.id)

                        return res.status(200).send({
                            result: results.dataValues,
                            token: tokenJwt,
                        });
            } else {
                return res.status(500).send({ status: 'error', message: `Anda Harus kebagian Sign Up dan klik tombol Sign Up with Google menggunakan email  = ${req.body.data.email}`})
            }
        })
        .catch((err) => {
            return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
        })
    },

    loginWithFacebook: (req, res) => {
        let encryptFacebookId = Crypto.createHmac('sha256', 'apingelescoFacebookId_api')
                                    .update(req.body.data.facebookId).digest('hex')

        User.findOne({
            where: {
                email: req.body.data.email,
                facebookId: encryptFacebookId,

            }
        })
        .then((results) => {
            console.log(results)
            if(results !== null) {
                // Kalo sudah pernah mendaftar dengan email google, dan user ingin mencoba
                // login lewat gmail, maka muncul errornya

                const tokenJwt = createJWTToken({ userId: results.dataValues.id, email: results.dataValues.email })

                        // console.log(dataUser.id)

                        return res.status(200).send({
                            result: results.dataValues,
                            token: tokenJwt,
                        });
            } else {
                return res.status(500).send({ status: 'error', message: `Anda Harus kebagian Sign Up dan klik tombol Sign Up with Facebook menggunakan email  = ${req.body.data.email}`})
            }
        })
        .catch((err) => {
            return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
        })
    },

    registerWithGoogle: (req, res) => {
       
        let encryptGoogleId = Crypto.createHmac('sha256', 'apingelescoGoogleId_api')
                                    .update(req.body.data.googleId).digest('hex')

        User.findOne({
            where: {
                email: req.body.data.email,
                googleId: encryptGoogleId,

            }
        })
        .then((results) => {
            console.log(results)
            if(results !== null) {
                // Kalo sudah pernah mendaftar dengan email Facebook, dan user ingin mencoba
                // login lewat gmail, maka muncul errornya
                return res.status(500).send({ status: 'error', message: `Anda sudah pernah mendaftar dengan Email = ${req.body.data.email}`})
            } else {
                // console.log('Testing')
            
                let encryptGoogleId = Crypto.createHmac('sha256', 'apingelescoGoogleId_api')
                                    .update(req.body.data.googleId).digest('hex')


                console.log('Masuk ke sini')
                // Jika belum ada
                req.body.data.googleId = encryptGoogleId
                // req.body.data.role = 'User'
                req.body.data.isVerified = 1
                req.body.data.userImage = '/defaultPhoto/defaultUser.png'
                req.body.data.phone = '0'

                User.create(req.body.data)
                .then((results) => {

                    console.log(results.dataValues)
                        const tokenJwt = createJWTToken({ userId: results.dataValues.id, email: results.dataValues.email })

                        return res.status(200).send({
                            result: results.dataValues,
                            token: tokenJwt
                        });
                })
                .catch((err) => {
                    return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });

                })
            }
        })
        .catch((err) => {
            return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
        })
    },

    registerWithFacebook: (req, res) => {
        let encryptFacebookId = Crypto.createHmac('sha256', 'apingelescoFacebookId_api')
                                    .update(req.body.data.facebookId).digest('hex')

        User.findOne({
            where: {
                email: req.body.data.email,
                facebookId: encryptFacebookId,

            }
        })
        .then((results) => {
            console.log(results)
            if(results !== null) {
                // Kalo sudah pernah mendaftar dengan email Facebook, dan user ingin mencoba
                // login lewat gmail, maka muncul errornya
                return res.status(500).send({ status: 'error', message: `Anda sudah pernah mendaftar dengan Email = ${req.body.data.email}`})
            } else {
                // console.log('Testing')
            
                let encryptFacebookId = Crypto.createHmac('sha256', 'apingelescoFacebookId_api')
                                    .update(req.body.data.facebookId).digest('hex')

                console.log(encryptFacebookId)

                console.log('Masuk ke sini')
                // Jika belum ada
                req.body.data.facebookId = encryptFacebookId
                // req.body.data.role = 'User'
                req.body.data.isVerified = 1
                req.body.data.userImage = '/defaultPhoto/defaultUser.png'
                req.body.data.phone = '0'

                User.create(req.body.data)
                .then((results) => {

                    console.log(results.dataValues)
                        const tokenJwt = createJWTToken({ userId: results.dataValues.id, email: results.dataValues.email })

                        return res.status(200).send({
                            result: results.dataValues,
                            token: tokenJwt
                        });
                })
                .catch((err) => {
                    return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });

                })
            }
        })
        .catch((err) => {
            return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
        })
    }
}