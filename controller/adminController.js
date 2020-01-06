const { Article, Sequelize, sequelize, Category, ArticleCategory, User, UserInterest, Location, LocationPicture, Room, RoomFacility } = require('../models');
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
    adminInsertLocation : (req,res) =>{
        console.log('admin insert location')
        const path = '/post/location'; //file save path
        // const upload = uploader(path, `${req.query.name.split('.')[0].replace(/ /g, '-')}`).fields([{ name: 'image'}]);
        const uploaddata = uploader(path, `IMG`).fields([{name: 'imageLocation'},{name: 'roomImage'}])
        

        uploaddata(req, res, (err) => {
            if(err){
                console.log(err)
                console.log('masuk2')
                return res.status(500).json({ message: 'Upload picture failed !', error: err.message });
            }
            // console.log('uploaded')
            // console.log(req.body)
            // console.log(req.files)
            const { imageLocation, roomImage } = req.files;
            console.log(imageLocation, roomImage)

            

            let imageLocationPaths = []
            let roomImagePaths = []

            if(imageLocation.length > 0) {
                for(let i = 0; i<imageLocation.length ; i++){
                    let dest =  path + '/' + imageLocation[i].filename 
                    imageLocationPaths.push({imagePath : dest})
                    console.log(dest)
                }
            }

            const path2 = '/post/roomimages'

            if(roomImage.length > 0) {
                for(let y = 0 ; y<roomImage.length; y++){
                    let dest = path2 + '/' + roomImage[y].filename 
                    roomImagePaths.push({imagePath : dest})
                    console.log(dest)
                }
            }

            const {
                name, website, phone, city, address, description, googleMapName, googleMapEmbed, slug
            } = JSON.parse(req.body.locationData)


            let array = JSON.parse(req.body.roomData)
            let listOfFacilities = []
            let listOfRoomImages = []
            let counter = 0


            array = array.map((val)=>{
                console.log(val.roomImages)
                val.roomImages.splice(val.roomImages.length-1, 1)
                console.log('spliced')
                console.log(val.roomImages)
                return val
            })

           
            var roomData = array.map((val, id) =>{
                // listOfFacilities.push({facilityName : val.roomFacility})
                let facilities = val.roomFacility.map((list)=>{
                    return { facilityName : list }
                })
                let roomImages = val.roomImages.map((image)=>{
                    counter ++
                    console.log('counter is ', counter )
                    console.log(roomImagePaths[counter -1])
                    return roomImagePaths[counter-1]
                })

                listOfRoomImages.push(roomImages)
                listOfFacilities.push(facilities)

                delete val.roomFacilityTextField
                delete val.roomFacility
                return val
            })
            console.log(roomData)

            console.log(listOfRoomImages)
            console.log(listOfFacilities)

           
            return sequelize.transaction(async (t) => {

                let result = await Location.create({
                    name,
                    website,
                    phone,
                    address,
                    description,
                    googleMapName : googleMapName,
                    googleMapEmbed : googleMapEmbed ? googleMapEmbed : null,
                    slug,
                    city
                }, {transaction: t})

                let data = imageLocationPaths.map((val)=>{
                    val.locationId = result.id
                    return val
                })
                await LocationPicture.bulkCreate(data, {transaction : t})
                console.log('location picture success')
                let dataRoom = roomData.map((val)=>{
                    val.locationId = result.id
                    return val
                })
                for(let i = 0 ; i < roomData.length ; i++){
                    console.log('i is '+ i)
                    let results = await Room.create(dataRoom[i], {transaction : t})
                    let facilitiesData = listOfFacilities[i].map((val)=>{
                        return { roomId : results.id, facilityName : val.facilityName}
                    })
                    let roomImagesData = listOfRoomImages[i].map((val)=>{
                        return { locationId : result.id, roomId : results.id, imagePath : val.imagePath}
                    })
                    await LocationPicture.bulkCreate(roomImagesData,{transaction : t})
                    console.log(`success insert images for room ${i}`)
                    await RoomFacility.bulkCreate(facilitiesData ,{transaction : t})
                    console.log(`success insert room facilities for room ${i}`)
                }

                console.log('FINISH')

                // chain all your queries here. make sure you return them.
                // return Location.create({
                //     name,
                //     website,
                //     phone,
                //     address,
                //     description,
                //     googleMapName : googleMapName,
                //     googleMapId : googleMapId ? googleMapId : null
                // }, {transaction: t}).then(result => {
                //     let data = imageLocationPaths.map((val)=>{
                //         val.locationId = result.id
                //         return val
                //     })
                //     console.log(data)
                //     LocationPicture.bulkCreate(data)
                //     .then((result2) => {
                //         // console.log(result2)
                //         let dataRoom = roomData.map((val)=>{
                //             val.locationId = result.id
                //             return val
                //         })
                //         console.log(dataRoom)
                //         console.log('notes created');
                //         for(let i = 0 ; i < roomData.length ; i++){
                //             console.log('i is ' + i)
                //             Room.create(dataRoom[i])
                //             .then((results)=>{
                //                 console.log(listOfFacilities[i])
                //                 console.log(listOfRoomImages[i])

                //                 let facilitiesData = listOfFacilities[i].map((val)=>{
                //                     return { roomId : results.id, facilityName : val.facilityName}
                //                 })

                //                 let roomImagesData = listOfRoomImages[i].map((val)=>{
                //                     return { locationId : result.id, roomId : results.id, imagePath : val.imagePath}
                //                 })

                //                 console.log(facilitiesData)
                //                 console.log(roomImagesData)

                //                 LocationPicture.bulkCreate(roomImagesData)
                //                 .then((res)=>{console.log(`success insert images for room ${i}`)})
                //                 .catch((err)=>{
                //                     console.log(err)
                //                     throw new Error()})
                //                 // console.log({...{roomId : results.id}, ...dataRoom[i]})
                //                 RoomFacility.bulkCreate(facilitiesData)
                //                 .then((res)=>{console.log(`success insert room facilities for room ${i}`)})
                //                 .catch((err)=>{
                //                     console.log(err)
                //                     throw new Error()})
                //             })
                //             .catch((err)=>{
                //                 console.log(err)
                //                 throw new Error()
                //             })


                //         }
                //         // console.log('bacot')


                //         // Room.bulkCreate(roomData, {transaction : t})
                //     }).catch((err)=>{
                //         console.log(err)
                //         throw new Error()
                //     })
                // });
              
              }).then(result => {
                //   console.log(result)
                  console.log('success')
                  return res.status(200).send({message : 'Success! ' })
                // Transaction has been committed
                // result is whatever the result of the promise chain returned to the transaction callback
              }).catch(err => {
                  console.log(err)
                // Transaction has been rolled back
                // err is whatever rejected the promise chain returned to the transaction callback
              });
        })
    },

    
}