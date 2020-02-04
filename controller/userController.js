
// const { User, Sequelize, sequelize, School, Project, Payment, Subscription, scholarship, Student } = require('../models');
// const Op = Sequelize.Op
const {User, Sequelize, UserInterest} = require('../models');
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
                role : 'User',
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
                return res.status(500).send({message : 'theres an error', error : 'User dengan email ini telah terdaftar.' })
          }
      
      }).catch((error)=>{
        console.log(error)
            return res.status(500).send({message : 'theres an error', error }) 
      })
     
    //   return res.status(200).send({message : 'success', result })
    },

    loginUser: (req, res) => {
        User.findOne({
            where: {
                email: req.body.email,
                // password: Crypto.createHmac('sha256', 'ngelesapi').update(password).digest('hex')
            }
        })
        .then((result) => {
            if(result.dataValues.googleId) {
                return res.status(500).send({message : 'theres an error', error : `Gunakan email ini untuk 'Login With Gmail Account' ` })
            } 

            if(result.dataValues.facebookId) {
                return res.status(500).send({message : 'theres an error', error : `Gunakan email ini untuk 'Login With Facebook Account' ` })
            }

            User.findOne({
                where: {
                    email: req.body.email,
                    password:  Crypto.createHmac('sha256', 'ngelesapi').update(req.body.password).digest('hex')
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
                return res.status(500).send({message : 'theres an error', error : `Email atau Password yang anda masukkan salah. ` })
            })
        })
        .catch((err) => {
            return res.status(500).send({message : 'theres an error', error : `Email tidak terdaftar. Harap Daftar/Sign Up terlebih dahulu ` })
        })
    },

    keepLogin: (req, res) => {
        User.findOne({
            where: {
                email: req.user.email
            }
        })
        .then((result) => {
            console.log('\---===---===---===---===>>>',result)
            const tokenJwt = createJWTToken({ id: result.dataValues.id, email: result.dataValues.email })
           
            delete result.dataValues.password
            delete result.dataValues.googleId,
            delete result.dataValues.facebookId
            
            return res.status(200).send({
                result: result.dataValues, 
                token: tokenJwt
            })
        })
        .catch((err) => {
            console.log(err)
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
                    plain: true,
                    where:
                     {
                         id,
                         email,
                     }
                }
              ).then((results)=>{
                //   console.log('ini dreuslts')
                //   const tokenJwt = createJWTToken({ id: result.dataValues.id, email: result.dataValues.email })
                    // console.log(results)
                    // delete result.dataValues.password
                    // console.log('ini adalah update user ketika sudah verifikasi email')
                    // console.log(result.dataValues.isVerified)
                    
                    // return res.status(200).send({
                    //     message : 'success', results : result.dataValues, token : tokenJwt
                    // });
                    User.findOne({
                        where: {email}
                    }).then((newResult) => {
                        console.log('ini dreuslts')
                        console.log(newResult.dataValues)
                        const tokenJwt = createJWTToken({ id: newResult.dataValues.id, email: newResult.dataValues.email })
                    // console.log(results)
                        delete newResult.dataValues.password
                    // console.log('ini adalah update user ketika sudah verifikasi email')
                    // console.log(result.dataValues.isVerified)
                    
                        return res.status(200).send({
                            message : 'success', results : newResult.dataValues, token : tokenJwt
                        });

                    })
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

                const tokenJwt = createJWTToken({ id: results.dataValues.id, email: results.dataValues.email })

                        // console.log(dataUser.id)

                        return res.status(200).send({
                            result: results.dataValues,
                            token: tokenJwt,
                        });
            } else {
                return res.status(500).send({ status: 'error', message: `Silahkan Sign Up With Google menggunakan email  = ${req.body.data.email}`})
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

                const tokenJwt = createJWTToken({ id: results.dataValues.id, email: results.dataValues.email })

                        // console.log(dataUser.id)

                        return res.status(200).send({
                            result: results.dataValues,
                            token: tokenJwt,
                        });
            } else {
                return res.status(500).send({ status: 'error', message: `Silahkan Sign Up With Facebook menggunakan email  = ${req.body.data.email}`})
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
                // googleId: encryptGoogleId,

            }
        })
        .then((results) => {
            console.log(results)
            if(results !== null) {
                // Kalo sudah pernah mendaftar dengan email Facebook, dan user ingin mencoba
                // login lewat gmail, maka muncul errornya

                console.log('=============================')
                console.log(results)
                console.log(results.dataValues)

                User.update({
                    googleId: encryptGoogleId
                },
                {
                    where : {
                        email: results.dataValues.email
                    }
                })
                .then((update) => {
                    User.findOne({
                        
                            where: {
                                email: req.body.data.email
                            }
                        
                    })
                    .then((newResult) => {
                        const tokenJwt = createJWTToken({ id: newResult.dataValues.id, email: newResult.dataValues.email })

                        return res.status(200).send({
                            result: newResult.dataValues,
                            token: tokenJwt
                        });
                    })
                    .catch((err) => {
                        return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
                    })
                })
                .catch((err) => {
                    return res.status(500).send({ message: "There's an error on the server. Please contact the administrator.", error: err.message })
                })

                // return res.status(500).send({ status: 'error', message: `Anda sudah pernah mendaftar dengan Email = ${req.body.data.email}`})
            
            } else {
                // console.log('Testing')
            
                let encryptGoogleId = Crypto.createHmac('sha256', 'apingelescoGoogleId_api')
                                    .update(req.body.data.googleId).digest('hex')


                console.log('Masuk ke sini')
                // Jika belum ada
                req.body.data.googleId = encryptGoogleId
                req.body.data.role = 'User'
                req.body.data.isVerified = 1
                req.body.data.userImage = '/defaultPhoto/defaultUser.png'
                req.body.data.phone = null

                User.create(req.body.data)
                .then((results) => {

                    console.log(results.dataValues)
                        const tokenJwt = createJWTToken({ id: results.dataValues.id, email: results.dataValues.email })

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
                // facebookId: encryptFacebookId,

            }
        })
        .then((results) => {
            console.log(results)
            if(results !== null) {
                // Kalo sudah pernah mendaftar dengan email Facebook, dan user ingin mencoba
                // login lewat gmail, maka muncul errornya

                console.log('=============================')
                console.log(results)
                console.log(results.dataValues)

                User.update({
                    facebookId: encryptFacebookId
                },
                {
                    where : {
                        email: results.dataValues.email
                    }
                })
                .then((update) => {
                    User.findOne({
                        
                            where: {
                                email: req.body.data.email
                            }
                        
                    })
                    .then((newResult) => {
                        const tokenJwt = createJWTToken({ id: newResult.dataValues.id, email: newResult.dataValues.email })

                        return res.status(200).send({
                            result: newResult.dataValues,
                            token: tokenJwt
                        });
                    })
                    .catch((err) => {
                        return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
                    })
                })
                .catch((err) => {
                    return res.status(500).send({ message: "There's an error on the server. Please contact the administrator.", error: err.message })
                })

            } else {
                // console.log('Testing')
            
                let encryptFacebookId = Crypto.createHmac('sha256', 'apingelescoFacebookId_api')
                                    .update(req.body.data.facebookId).digest('hex')

                console.log(encryptFacebookId)

                console.log('Masuk ke sini')
                // Jika belum ada
                req.body.data.facebookId = encryptFacebookId
                req.body.data.role = 'User'
                req.body.data.isVerified = 1
                req.body.data.userImage = '/defaultPhoto/defaultUser.png'
                req.body.data.phone = null

                User.create(req.body.data)
                .then((results) => {

                    console.log(results.dataValues)
                        const tokenJwt = createJWTToken({ id: results.dataValues.id, email: results.dataValues.email })

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

    subscribeUser: (req, res) => {
        console.log(req.body)
        req.body.list = req.body.list.toString();

        UserInterest.findOne({
            where: {
                email: req.body.email
            }
        })
        .then((result) => {
            if(result === null) {
                UserInterest.create({
                    email: req.body.email,
                    subscribeList: req.body.list,
                    role: req.body.role
                })
                .then((result) => {
                    console.log(result)
                    return res.status(200).send({
                        message: 'success'
                    })
                })
                .catch((err) => {
                    return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
                })
            } else {
                UserInterest.update(
                    {
                        subscribeList: req.body.list,
                        role: req.body.role
                    },
                    
                    {
                        where: {
                            email: req.body.email
                        } 
                    }
                )
                .then((result) => {
                    return res.status(200).send({
                        message: 'success'
                    })
                })
                .catch((err) => {
                    return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
                })
            }
        }) 
        .catch((err) => {
            console.log(err)
            return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
        })

        // UserInterest.create({
        //     email: req.body.email,
        //     subscribeList: req.body.list
        // })
        // .then((result) => {
        //     console.log(result)
        //     return res.status(200).send({
        //         message: 'success'
        //     })
        // })
        // .catch((err) => {
        //     return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
        // })
    },

    sendResetPasswordToken: (req, res) => {
        User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then((result) => {
            if(result) {

                if(result.dataValues.googleId && result.dataValues.password === null) {
                    return res.status(500).send({ status: 'gmailTrue', message: `Silahkan Login with Gmail dengan Email = ${req.body.email}` })
                } 

                if(result.dataValues.facebookId && result.dataValues.password === null) {
                    return res.status(500).send({ status: 'facebookTrue', message: `Silahkan Login with Facebook dengan Email = ${req.body.email}` })
                }

                const tokenPassword = createForgotPasswordToken({ id: result.dataValues.id, email: result.dataValues.email })

                let linkVerifikasi = `${UI_LINK}/verify-reset?token=${tokenPassword}`;
                                
                //untuk live
                //let linkVerifikasi = `https://sharex.purwadhikax.com/verified?t${tokenJwt}`
        
                let mailOptions = {
                    from: 'ngeles.co Admin <operational@ngeles.co>',
                    to: req.body.email,
                    subject: 'Link Reset Password for NGELES.CO',
                    html: `
                            <div>
                                <hr />
                                <h4>Link Reset Password</h4>
                                <p>Ini adalah Link : <span style='font-weight:bold'>${req.body.email}</span>.</p>
                                <p>To verification your account <a href='${linkVerifikasi}'>Click Here!</a></p>
                                <hr />
                            </div>`
                }

                transporter.sendMail(mailOptions, (err1, res1) => {
                    if (err1) {
                        return res.status(500).send({ status: 'error', err: err1 })
                    }

                    return res.status(200).send({
                        token: tokenPassword
                    });

                })

            } else {
                return res.status(500).send({ status: 'notFoundEmail', message: 'Email belum terdaftar, harap Register terlebih dahulu' })
            }
        })
        .catch((err) => {
            return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
        })
    },

    userResetPassword: (req, res) => {
        let hashPassword = Crypto.createHmac('sha256', 'ngelesapi').update(req.body.password).digest('hex')
        
        User.update({
            password: hashPassword
        },
        {
            where: {
                email: req.body.email
            }
        })
        .then((results) => {
            return res.status(200).send(results)
        })
        .catch((err) => {
            return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
        })
    },

    // userChangePassword: (req, res) => {
    //     // let oldPw = Crypto.createHmac('sha256', 'kasihnusantara_api').update(req.body.oldpw).digest('hex');
    //     // let newPw = Crypto.createHmac('sha256', 'kasihnusantara_api').update(req.body.newpw).digest('hex');

    //     User.findOne({
    //         where: {
    //             email: req.body.email,
    //             password: oldPw
    //         }
    //     })
    //     .then((results) => {
    //         if(results) {
    //             User.update({
    //                 password: newPw

    //             }, 
    //             {
    //                 where: {
    //                     password: oldPw
    //                 }
    //             })
    //             .then((lastResults) => {
    //                 return res.status(200).send(results)
    //             })
    //             .catch((err) => {
    //                 return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
    //             })
    //         } else {
    //             return res.status(500).json({ message: "Password Lama Anda Salah", error: err.message });
    //         }
    //     })
    //     .catch((err) => {
    //         return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
    //     })
    // },

    userCheckResetToken: (req, res) => {
        let email = req.resetToken.email

        return res.status(200).send(email)
    },

    addUserData: (req, res) => {
        // console.log(req.user)
        // console.log(req.body)
        const { 
            firstName,
            lastName,
            email,
            phone,
            jenis_kelamin,
            tanggalLahir,
            address,
            company,
            domisili
         } = req.body
         console.log(req.body)
         console.log(req.user)

        User.update(
            {
                firstName,
                lastName,
                email,
                phone,
                jenis_kelamin,
                tanggalLahir,
                alamat: address,
                perusahaan: company,
                domisili
            },
            {
                where: {
                    id: req.user.id,
                    email: req.user.email
                }
            }
        ).then((result) => {
            return res.status(200).send({
                message : 'success'
            });
        })
        .catch((err) => {
            console.log(err)
            return res.status(500).send({message : 'theres an error', err })
        })
    }, 

    changeUserPassword: (req, res) => {

        console.log(req.body)

        let { 
            password,
            newPassword,
            newConfPassword
        } = req.body

        const { 
            id,
            email
        } = req.user

        let old_password =  Crypto.createHmac('sha256', 'ngelesapi').update(password).digest('hex')
        newPassword =  Crypto.createHmac('sha256', 'ngelesapi').update(newPassword).digest('hex')

        // const {

        // } = req.body

        User.findOne({
            where: {
                email,
                password: old_password
            }
        })
        .then((results) => {
            if(results) {
                User.update({
                    password: newPassword

                }, 
                {
                    where: {
                        email
                    }
                })
                .then((lastResults) => {
                    return res.status(200).send(results)
                })
                .catch((err) => {
                    return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
                })
            } else {
                return res.status(500).json({ message: "Password Lama Anda Salah", error: err.message });
            }
        })
        .catch((err) => {
            return res.status(500).json({ message: "Password Lama Anda Salah", error: err.message });
        })
    }
    
}