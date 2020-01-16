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
        // console.log(req.body)
        try{
            let {location, category, limit, offset, page} = req.body
            console.log(req.body)
            // console.log(req.params.location) 
            // console.log(req.params.category)  
            if(location === 'Semua Venue' && category === 'Semua Kategori') {
                let results = await Location.findAll({
                    limit,
                    offset, 
                    page,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                        // include : [
                        //     [sequelize.col('LocationPictures.imagePath'), 'locationImages'],
                        // ]
                    },
                    include: [
                        {
                            model: Program,
                            // required: true,
                            // attributes: {
                            //     exclude: ['createdAt', 'updatedAt']
                            // }
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
                // console.log(results)
                return res.status(200).send({ message: 'success get', results, total: Math.ceil(results.length / limit) })
            
            } else {
                console.log('========================= masuk ')
                let {location, category, limit, offset, page} = req.body
                console.log(req.body)
                let obj;
                if(category === 'Semua Kategori') {
                    obj = {
                        model: Program,
                        
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        }
                    }
                } else {
                    obj = {
                        model: Program,
                        required: true,
                        attributes: {
                            exclude: ['createdAt', 'updatedAt']
                        },
                        where: {
                            category: category.replace(' ', '')
                        }
                    }
                }

                let results = await Location.findAll({
                    limit,
                    offset,
                    page,
                    attributes: {
                        exclude: ['createdAt', 'updatedAt'],
                        // include : [
                        //     [sequelize.col('LocationPictures.imagePath'), 'locationImages'],
                        // ]
                    },
                    include: [
                        obj,
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
                    where: {
                        city: location === 'Semua Venue' ? { [Op.like] : '%%'} : location
                    },
                    order: [['id', 'DESC']]


                })
                // console.log(results)
                return res.status(200).send({ message: 'success get', results, total: Math.ceil(results.length / limit)  })
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
            attributes: ['id','city'],
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