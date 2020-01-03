const { Program, Lecturer, sequelize, Sequelize, programpicture, LecturerProgram, Location, Room} = require('../models')
const Op = Sequelize.Op;
const { uploader } = require('../helpers/uploader')
const { URL_API } = require('../helpers/urlapi')
const Crypto = require('crypto');

var path = require('path')
var mime = require('mime')
const fs = require('fs')

module.exports = {
    createClass : async(req, res) => {
        const path = '/post/program';
        const upload = uploader(path, 'PRG').fields([{ name: 'image'}]);
        console.log('---------masuk add class -------------------')

        let lastId = ''
        await Program.findOne({
            attributes:['id'],
            order: [['createdAt', 'DESC']]
        }).then((result)=>{
            lastId=result.id+1
        })
        let encryptId = Crypto.createHmac('md5', 'ngelesapi').update(toString(lastId)).digest('hex')
        console.log('-------->' , lastId, typeof(lastId))
        console.log('-------->', encryptId)

        upload(req, res, (err)=>{
            if(err){
                return res.status(500).json({ message: 'Upload picture failed !', error: err.message });
            }
            const {image} = req.files;
            console.log('------------------------>>>> image')
            console.log(image)

            
            let listgambar= []
            console.log('-----> listGambar')
            // console.log(listImage)


            const data = JSON.parse(req.body.data)
            console.log('------------------------>>> data')
            console.log(data)

            const {
                category,
                name,
                lecturer,
                classDate,
                location,
                room,
                price,
                discount,
                description,
                minimalAge,
                level,
                classType,
                minimumSeat,
                maximumSeat,
                startDateReg,
                endDateRed,
                priceInclusive,
                toPrepare,
                outCome,
                slug,
                language,
            } = data

            // let languages = language.join('|')

            return sequelize.transaction(function (t){
                return Program.create({
                    name,
                    hoster: 'admin',
                    // lecturerId: lecturer,
                    // pictureId,
                    category,
                    discountId: discount,
                    quotaMax: maximumSeat,
                    quotaMin: minimumSeat,
                    price,
                    classDescription: description,
                    locationId: location,
                    roomId: room,
                    startDateRegister: startDateReg,
                    lastDateRegister: endDateRed,
                    minimalAge: minimalAge,
                    level,
                    language,
                    classType,
                    priceInclusive,
                    toPrepare,
                    programOutome: outCome,
                    classDate,
                    slug: `${slug}-${encryptId}`,
                },{transaction: t})
                .then((result)=>{
                    let programId = result.dataValues.id
                    console.log(programId)
                    console.log(image.length)
                    let listImage = [];
                    for(let i=0; i < image.length; i++){
                        const imagePath = path + '/' + image[i].filename
                        listImage.push({
                            programId,
                            imagePath
                        })
                        listgambar.push(imagePath)
                    }
                    console.log(listImage)
                    programpicture.bulkCreate(listImage)
                    .then((result2) => {
                        // console.log(result2)
                        // return res.status(200).send({message: 'success', result: result2})
                    })
                    .catch((err)=>{
                        for(let i = 0; i < listgambar.length; i = i + 1) {
                            
                            fs.unlinkSync('./public' + listgambar[i]);
                        }
                        // console.log(err)
                        return res.status(500).send({message: 'error', err})
                    })
                    let lecturerList = []
                    for(let x=0; x < lecturer.length; x++){
                        lecturerList.push({
                            programId,
                            lecturerId: parseInt(lecturer[x])
                        })
                    }
                    console.log('===============================> lecturerlist ',lecturerList)
                    LecturerProgram.bulkCreate(lecturerList)
                    .catch((err)=>{
                        // console.log(err)
                        return res.status(500).send({ message : 'error', err})
                    })
                }).catch((err) => {
                    for(let i = 0; i < listgambar.length; i = i + 1) {
                            
                        fs.unlinkSync('./public' + listgambar[i]);
                    }
                    return res.status(500).send({ message : "there's an error" , err })
                })
            })
        })
    },
    getProgram: (req, res)=>{
        let lecturerId
        Program.findAll({
            attributes:{
                exclude: ['createdAt','updatedAt']
            },
            include : [
                {
                    model : programpicture,
                    attributes: ['programId', 'imagePath']
                },
                {
                    model : Lecturer,
                    attributes: {
                        exclude: ['createdAt','updatedAt']
                    },
                    through: {
                        model: LecturerProgram,
                        attributes: [],
                    }
                }
            ],
            order: [['id', 'DESC']]
        })
        .then((result1) => {
            console.log(result1)
            return res.status(200).send(result1)
        })
        .catch((err)=> {
            console.log(err)
            return res.status(500).send({ status: 'error', message: err})
        })
    },
    getSelectedProgram: (req, res)=>{
        console.log('===================================================> masuk get one')
        console.log(req.body)
        Program.findOne({
            attributes:{
                exclude: ['createdAt','updatedAt']
            },
            include: [
                {
                    model: programpicture,
                    attributes: ['programId', 'imagePath']
                },
                {
                    model : Lecturer,
                    attributes: {
                        exclude: ['createdAt','updatedAt']
                    },
                    through: {
                        model: LecturerProgram,
                        attributes: [],
                    }
                },
                {
                    model: Location,
                    attributes:['name', 'address', 'googleMapName', 'googleMapEmbed'],
                    include: [
                        {
                            model : Room,
                            required : true,
                            attributes : {
                                exclude :   ['createdAt', 'updatedAt']
                            } ,
                        }
                    ]
                }
            ],
            where:{
                slug : req.body.slug
            }
        })
        .then((result) => {
            console.log(result)
            return res.status(200).send({message : 'success get blog' , result})
        }).catch((error)=>{
            console.log(error)
            return res.status(500).send({ message : 'theres an error ', error })
        })
    }
}