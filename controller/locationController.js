const { Category, Sequelize, sequelize, Location, LocationPicture, Room, RoomFacility, Program } = require('../models');
const Op = Sequelize.Op;

module.exports = {
    getLocation : async (req,res) =>{
        console.log(req.params.slug)
        try{
            
            let results = await Location.findOne({
                where:{
                    slug: req.params.slug
                },
                attributes: {
                    exclude : ['createdAt', 'updatedAt'],
                    // include : [
                    //     [sequelize.col('LocationPictures.imagePath'), 'locationImages'],
                    // ]
                },
                include : [
                    {
                        model : LocationPicture,
                        required : true,
                        where : {
                            roomId: {
                                [Op.eq]: null
                              },
                        },
                        attributes : {
                            exclude :   ['createdAt', 'updatedAt']
                        } 
                    },
                    {
                      model : Room,
                      required : true,
                      attributes : {
                          exclude :   ['createdAt', 'updatedAt']
                      } ,
                      include : [
                          {
                              model : RoomFacility,
                              required : false,
                              attributes : {
                                exclude :   ['createdAt', 'updatedAt']
                              }
                          },
                          {
                            model : LocationPicture,
                            required : true,
                            attributes : {
                                exclude :   ['createdAt', 'updatedAt']
                            } 
                        },
                      ]
                    }
                ]
        
                    
            })
            console.log(results)
            return res.status(200).send({message : 'success get', results })
        }

        catch(err){
            console.log(err)
        }
    },
    getAll : async (req,res) =>{
        
        try{
            console.log('====================>>>>>>>>>>>>>>>>>>>>>')
            console.log(req.params.location)    
            if(req.params.location === 'Semua Lokasi') {
                console.log('==================================> masuk masuk if')
                let results = await Location.findAll({
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                        // include : [
                        //     [sequelize.col('LocationPictures.imagePath'), 'locationImages'],
                        // ]
                    },
                    include: [
                        {
                            model: Program,
                            required: true,
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            }
                        },
                        {
                            model: LocationPicture,
                            required: true,
                            where: {
                                roomId: {
                                    [Op.eq]: null
                                },
                            },
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            }
                        },
                        {
                            model: Room,
                            required: true,
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            },
                            include: [
                                {
                                    model: RoomFacility,
                                    required: false,
                                    attributes: {
                                        exclude: ['createdAt', 'updatedAt']
                                    }
                                },
                                {
                                    model: LocationPicture,
                                    required: true,
                                    attributes: {
                                        exclude: ['createdAt', 'updatedAt']
                                    }
                                },
                            ]
                        }
                    ],
                    order: [['id', 'DESC']]


                })
                console.log(results)
                return res.status(200).send({ message: 'success get', results })
            
            } else {
                console.log('==================================> masuk else')
                let results = await Location.findAll({
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                        // include : [
                        //     [sequelize.col('LocationPictures.imagePath'), 'locationImages'],
                        // ]
                    },
                    include: [
                        {
                            model: Program,
                            required: true,
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            }
                        },
                        {
                            model: LocationPicture,
                            required: true,
                            where: {
                                roomId: {
                                    [Op.eq]: null
                                },
                            },
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            }
                        },
                        {
                            model: Room,
                            required: true,
                            attributes: {
                                exclude: ['createdAt', 'updatedAt']
                            },
                            include: [
                                {
                                    model: RoomFacility,
                                    required: false,
                                    attributes: {
                                        exclude: ['createdAt', 'updatedAt']
                                    }
                                },
                                {
                                    model: LocationPicture,
                                    required: true,
                                    attributes: {
                                        exclude: ['createdAt', 'updatedAt']
                                    }
                                },
                            ]
                        }
                    ],
                    where : {
                        city: req.params.location
                    },
                    order: [['id', 'DESC']]


                })
                console.log(results)
                return res.status(200).send({ message: 'success get', results })
            } 
        }

        catch(err){
            console.log(err)
        }
    },
    getAllName : async (req,res) =>{
        // console.log(req.params.slug)
        try{
            
            let results = await Location.findAll({
                attributes: ['id','name', 'city'],
                // {
                    // exclude : ['createdAt', 'updatedAt'],
                    // include : [
                    //     [sequelize.col('LocationPictures.imagePath'), 'locationImages'],
                    // ]
                // },
                include : [
                    // {
                    //     model : LocationPicture,
                    //     required : true,
                    //     where : {
                    //         roomId: {
                    //             [Op.eq]: null
                    //           },
                    //     },
                    //     attributes : {
                    //         exclude :   ['createdAt', 'updatedAt']
                    //     } 
                    // },
                    {
                      model : Room,
                      required : true,
                      attributes : ['id','roomName']
                    //   {
                    //       exclude :   ['createdAt', 'updatedAt']
                    //   } ,
                    //   include : [
                    //       {
                    //           model : RoomFacility,
                    //           required : false,
                    //           attributes : {
                    //             exclude :   ['createdAt', 'updatedAt']
                    //           }
                    //       },
                    //       {
                    //         model : LocationPicture,
                    //         required : true,
                    //         attributes : {
                    //             exclude :   ['createdAt', 'updatedAt']
                    //         } 
                    //     },
                    //   ]
                    }
                ]
        
                    
            })
            console.log(results)
            return res.status(200).send({message : 'success get', results })
        }

        catch(err){
            console.log(err)
        }
    },

    showAvailableCity: (req, res) => {
        Location.findAll({
            attributes: ['city'],
            group: ['city']
        })
            .then((results) => {
                // console.log('Provinsi Murid')
                let data = results.map(results => results.city)

                return res.status(200).send(data)
            })
            .catch((err) => {
                return res.status(500).send({ message: err })
            })
    }
}