
// const { User, Sequelize, sequelize, School, Project, Payment, Subscription, scholarship, Student } = require('../models');
// const Op = Sequelize.Op



const { User, Sequelize, sequelize } = require('../models');
const Op = Sequelize.Op
const Crypto = require('crypto');

const { uploader } = require('../helpers/uploader');
const { createJWTToken } = require('../helpers/jwtoken');
const { transporter } = require('../helpers/mailer')
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
}