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
            if(result === null) {
                lastId = 1
            } else {
                lastId=result.id+1
            }
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

            let {
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
                endDateReg,
                priceInclusive,
                toPrepare,
                outCome,
                slug,
                language,
            } = data

            classDate = classDate.replace(/\bMonday\b, /g, '');
            classDate = classDate.replace(/\bTuesday\b, /g, '');
            classDate = classDate.replace(/\bWednesday\b, /g, '');
            classDate = classDate.replace(/\bThursday\b, /g, '');
            classDate = classDate.replace(/\bFriday\b, /g, '');
            classDate = classDate.replace(/\bSaturday\b, /g, '');
            classDate = classDate.replace(/\bSunday\b, /g, '');

            startDateReg = startDateReg.replace(/\bMonday\b, /g, '');
            startDateReg = startDateReg.replace(/\bTuesday\b, /g, '');
            startDateReg = startDateReg.replace(/\bWednesday\b, /g, '');
            startDateReg = startDateReg.replace(/\bThursday\b, /g, '');
            startDateReg = startDateReg.replace(/\bFriday\b, /g, '');
            startDateReg = startDateReg.replace(/\bSaturday\b, /g, '');
            startDateReg = startDateReg.replace(/\bSunday\b, /g, '');

            endDateReg = endDateReg.replace(/\bMonday\b, /g, '');
            endDateReg = endDateReg.replace(/\bTuesday\b, /g, '');
            endDateReg = endDateReg.replace(/\bWednesday\b, /g, '');
            endDateReg = endDateReg.replace(/\bThursday\b, /g, '');
            endDateReg = endDateReg.replace(/\bFriday\b, /g, '');
            endDateReg = endDateReg.replace(/\bSaturday\b, /g, '');
            endDateReg = endDateReg.replace(/\bSunday\b, /g, '');

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
                    lastDateRegister: endDateReg,
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
                        let lecturerList = []
                        for(let x=0; x < lecturer.length; x++){
                            lecturerList.push({
                                programId,
                                lecturerId: parseInt(lecturer[x])
                            })
                        }
                        console.log('===============================> lecturerlist ',lecturerList)
                        LecturerProgram.bulkCreate(lecturerList)
                        .then((resultx)=>{
                            return res.status(200).send('data success di simpan')
                        })
                        .catch((err)=>{
                            return res.status(500).send(err)
                        })
                    })
                    .catch((err)=>{
                        for(let i = 0; i < listgambar.length; i = i + 1) {
                            
                            fs.unlinkSync('./public' + listgambar[i]);
                        }
                        // console.log(err)
                        return res.status(500).send({message: 'error', err})
                    })
                    
                    
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
                },
                {
                    model: Location,
                    attributes:['name', 'city'],
                },
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
                },
                {
                    model: Room,
                    attributes: ['roomName']
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
    },
    getByFilter:(req, res) =>{
        console.log('masuk get filter')
        let property = Object.getOwnPropertyNames(req.body)
        let value = req.body[property]
        Program.findAll({
            attributes:{
                exclude: ['createdAt','updatedAt']
            },
            where:{
                [property]: value
            }
        })
        .then((result)=>{
            console.log(result)
            res.send(result)
        })
    },
    getFilteredClass : (req, res) => {
        
        console.log(req.body)
        Program.findAll({
            attributes: {
                exclude: ['createdAt', 'updatedAt']
            },
            include: [
                {
                    model: programpicture,
                    attributes: ['programId', 'imagePath']
                },
                {
                    model: Lecturer,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt']
                    },
                    through: {
                        model: LecturerProgram,
                        attributes: [],
                    }
                },
                {
                    model: Location,
                    attributes: ['name'],
                },
            ],
            where: {
                category: req.params.slug
            },
            order: [['id', 'DESC']]
        })
            .then((result1) => {
                console.log(result1)
                return res.status(200).send(result1)
            })
            .catch((err) => {
                console.log(err)
                return res.status(500).send({ status: 'error', message: err })
            })
    }, 
    
    
}