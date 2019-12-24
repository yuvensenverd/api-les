const { Category, Sequelize, sequelize, Location, LocationPicture, Room, RoomFacility } = require('../models');
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
}