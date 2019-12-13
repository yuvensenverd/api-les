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
            attributes : {
                exclude : ['password', 'googleId', 'facebookId']
            },
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
            return res.status(500).send(err)
        })
    },
    adminGetBlog : (req,res) =>{
        Article.findAndCountAll({
            attributes : {
                exclude : ['articleDate', 'banner', 'ebook', 'slug']
            },
            offset : 0,
            limit : 6,
            order: [['createdAt', 'DESC']]
        }).then(result=>{
            return res.status(200).send(result)
        }).catch(err => {
            return res.status(500).send(err)
        })
    },
    adminGetSubscription : (req,res) =>{
        UserInterest.findAndCountAll({
            offset:0,
            limit:10
        }).then(result =>{
            return res.status(200).send(result)
        }).catch(err =>{
            return res.status(500).send(err)
        }) 
    }
    
}