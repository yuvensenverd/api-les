const { Program, Lecturer, sequelize, Sequelize, programpicture} = require('../models')
const Op = Sequelize.Op;
const { uploader } = require('../helpers/uploader')
const { URL_API } = require('../helpers/urlapi')

var path = require('path')
var mime = require('mime')
const fs = require('fs')

module.exports = {
    add: (req, res)=>{
        const path = '/post/lecturer'
        const upload = uploader(path, 'LCT').fields([{name: 'image'}]);
        console.log('masuk add lecturer --------------------------------->>')

        upload(req, res, (err)=>{
            if(err){
                return res.status(500).json({ message: 'Upload picture failed !', error: err.message });
            }

            const {image} = req.files;
            console.log('------------ >> image')
            console.log(image)

            const imagePath = image ? path + '/' + image[0].filename : '/post/lecturer/default.png'

            const data = JSON.parse(req.body.data)
            console.log(data)

            const {
                name,
                jobtitle,
                description,
                youtube,
                instagram,
                linkedin,
                website
            } = data

            return sequelize.transaction(function(t){
                return Lecturer.create({
                    userId:1,
                    name,
                    jobtitle,
                    description,
                    youtube,
                    instagram,
                    website,
                    linkedin,
                    picture: imagePath,
                },{ transaction : t})
                .then((result)=>{
                    console.log(result)
                    return res.status(200).send({message: 'success', result: result})
                })
                .catch((err)=>{
                    fs.unlinkSync('./public' + listgambar[i]);
                    return res.status(500).send({message: 'error', err})
                })
            })

        })

    },
    getAll: (req, res)=>{
        Lecturer.findAll({
            attributes:{
                exclude: ['createdAt','updatedAt']
            }
        })
        .then((result)=>{
            return res.status(200).send({message : 'success get lecturer' , result})
        })
        .catch((err)=>{
            return res.status(500).send({ message : 'theres an error ', err })
        })
    },
    getByUserid: (req, res)=>{
        const {userId} = req.body
        Lecturer.findAll({
            attributes:{
                exclude: ['createdAt','updatedAt']
            },
            where: {
                userId
            }
        })
        .then((result)=>{
            return res.status(200).send({message : 'success get lecturer' , result})
        })
        .catch((err)=>{
            return res.status(500).send({ message : 'theres an error ', error })
        })
    },
    getByid: (req, res)=>{
        const {id} = req.body
        Lecturer.findOne({
            attributes:{
                exclude: ['createdAt','updatedAt']
            },
            where: {
                id
            }
        })
        .then((result)=>{
            return res.status(200).send({message : 'success get lecturer' , result})
        })
        .catch((err)=>{
            return res.status(500).send({ message : 'theres an error ', error })
        })
    },
}