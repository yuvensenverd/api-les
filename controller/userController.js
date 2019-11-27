
// const { User, Sequelize, sequelize, School, Project, Payment, Subscription, scholarship, Student } = require('../models');
// const Op = Sequelize.Op




const { uploader } = require('../helpers/uploader');
const {User, Sequelize} = require('../models');
const Op = Sequelize.Op;
const { createJWTToken, createForgotPasswordToken } = require('../helpers/jwtoken');
const { transporter } = require('../helpers/mailer')
const Crypto = require('crypto');


// FOR EMAILER
// const path=require('path')
// const fs =require('fs')
// const {emailer}=require('../helpers/mailer')
// const {pdfcreate}=require('../helpers/pdfcreate')

const moment=require('moment')





module.exports = {

    //Register, Login, KeepLogin, Reset Password / Forgot Password, Change Password, Login Gmail, Login Facebook
    registerUser : (req, res) => {
     
    },
    getStatus:(req,res)=>{
        
        console.log(req)
        console.log(res)
        console.log('========masuk getStatus =============')
    },

    loginWithGoogle: (req, res) => {
        User.findOne({
            where: {
                email: req.body.data.email,
                googleId: null,

            }
        })
        .then((results) => {
            console.log(results)
            if(results !== null) {
                // Kalo sudah pernah mendaftar dengan email google, dan user ingin mencoba
                // login lewat gmail, maka muncul errornya
                return res.status(500).send({ status: 'error', message: `Anda sudah pernah mendaftar dengan Email = ${req.body.data.email}`})
            } else {
                // console.log('Testing')
            
                let encryptGoogleId = Crypto.createHmac('sha256', 'apingelescoGoogleId_api')
                                    .update(req.body.data.googleId).digest('hex')
                
                User.findOne({
                    where: {
                        email: req.body.data.email,
                        googleId: encryptGoogleId
                    }
                })
                .then((dataUser) => {
                    console.log(dataUser)
                    if(dataUser !== null) {
                        // Jika ada
                        // console.log(dataUser.id)
                        // console.log(dataUser.email)
                        const tokenJwt = createJWTToken({ userId: dataUser.id, email: dataUser.email })

                        // console.log(dataUser.id)

                        return res.status(200).send({
                            dataUser,
                            token: tokenJwt,
                        });
                    } else {
                        return res.status(500).send({ status: 'error', message: `Anda harus mendaftar dengan klik 'Daftar dengan Gmail' untuk email = ${req.body.data.email}`})
                    }
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

    loginWithFacebook: (req, res) => {

    },

    registerWithGoogle: (req, res) => {
        console.log(req.body.data)
        User.findOne({
            where: {
                email: req.body.data.email,
                googleId: null,

            }
        })
        .then((results) => {
            console.log(results)
            if(results !== null) {
                // Kalo sudah pernah mendaftar dengan email google, dan user ingin mencoba
                // login lewat gmail, maka muncul errornya
                return res.status(500).send({ status: 'error', message: `Anda sudah pernah mendaftar dengan Email = ${req.body.data.email}`})
            } else {
                // console.log('Testing')
            
                let encryptGoogleId = Crypto.createHmac('sha256', 'apingelescoGoogleId_api')
                                    .update(req.body.data.googleId).digest('hex')

                                    console.log(encryptGoogleId)
                
                User.findOne({
                    where: {
                        email: req.body.data.email,
                        googleId: encryptGoogleId
                    }
                })
                .then((dataUser) => {
                    console.log(dataUser)
                    if(dataUser !== null) {
                        console.log('Masuk ke dataUser')
                        // Jika ada
                        // console.log(dataUser.id)
                        // console.log(dataUser.email)
                        const tokenJwt = createJWTToken({ userId: dataUser.id, email: dataUser.email })

                        // console.log(dataUser.id)

                        return res.status(200).send({
                            dataUser,
                            token: tokenJwt,
                        });
                    } else {
                        console.log('Masuk ke sini')
                        // Jika belum ada
                        req.body.data.googleId = encryptGoogleId
                        // req.body.data.role = 'User'
                        req.body.data.isVerified = 1
                        req.body.data.userImage = '/defaultPhoto/defaultUser.png'
                        req.body.data.phone = '0'

                        User.create(req.body.data)
                        .then((results) => {

                            User.findOne({
                                where: {
                                    googleId: encryptGoogleId
                                }
                            })
                            .then((dataUserInsert) => {
                                console.log(dataUserInsert)
                                const tokenJwt = createJWTToken({ userId: dataUserInsert.id, email: dataUserInsert.email })

                                return res.status(200).send({
                                    dataUser: dataUserInsert,
                                    token: tokenJwt
                                });
                            })
                            .catch((err) => {
                                return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
                            })
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
        })
        .catch((err) => {
            return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
        })
    }
}