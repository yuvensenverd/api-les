const { Article, Sequelize, sequelize, Category, ArticleCategory, User, UserInterest } = require('../models');
const Op = Sequelize.Op;
const Crypto = require('crypto');

const {uploader} = require('../helpers/uploader')
var jimp = require('jimp');
// const { URL_API } = require('../helpers/urlapi')

// var path = require('path')
// var mime = require('mime')
// const fs = require('fs')


module.exports = {
    adminGetUser : (req,res)=>{
        User.findAndCountAll({
            attributes : 
                 [
                    ['id', 'userId'],
                    ['firstName', 'Firstname'],
                    ['lastName', 'Lastname'],
                    ['email', 'Email'],
                    ['phone', 'PhoneNumber'],
                    ['isVerified', 'VerificationStatus'],
                    ['role', 'UserRole'],
                    'createdAt'
                 ]
            ,
            offset: 0,
            limit: 6,
            order: [['createdAt', 'DESC']]
        })
        .then(result => {
            console.log(result.count);
            console.log(result.rows);
            return res.status(200).send(result)
        })
        .catch(err => {
            console.log(err)
            return res.status(500).send(err)
        })
    },
    adminGetBlog : (req,res) =>{
        Article.findAndCountAll({
            attributes : [
                'id',
                ['title', 'BlogTitle'],
                ['author', 'Author'],
                'createdAt'
            ]
                // include : [],
                // exclude : ['articleDate', 'banner', 'ebook', 'slug', 'description', 'updatedAt']
            ,
            offset : 0,
            limit : 6,
            order: [['createdAt', 'DESC']]
        }).then(result=>{
            return res.status(200).send(result)
        }).catch(err => {
            return res.status(500).send(err)
        })
    },
    adminGetSubscription : (req,res) => {
        console.log(req.body)
        UserInterest.findAndCountAll({
            offset: req.body.offset,
            limit: req.body.limit,
            attributes : {
                exclude : ['updatedAt']
            },
            order: [['createdAt', 'DESC']]
        }).then(result =>{
            return res.status(200).send(result)
        }).catch(err =>{
            return res.status(500).send(err)
        }) 
    },
    adminDeleteArticle : (req,res) => { 
        console.log('req body')
        Article.update(
            {
                isDeleted: 1
            },
            {
                where: {
                    id : req.body.id
                }
            }
        ).then((result)=>{
            console.log(result)
            return res.status(200).send({message : 'Success! ' , result })
        }).catch((err)=>{
            console.log(err)
            return res.status(500).send({message : 'ERROR', err})
        })
    },
    // adminDeleteSubscriber = (req, res) => {
        
    // }
    
}