const { Program, Lecturer, sequelize, Sequelize, programpicture, LecturerProgram, Location, Room, Category, Schedule, BookingOrder, topClassHome} = require('../models')
const Op = Sequelize.Op;

module.exports = {
    getAllTopClass: (req, res) => {

        const { type, limit } = req.body

        topClassHome.findAll({
            attributes:{
                exclude: ['createdAt','updatedAt']
            },
            limit: parseInt(limit),
            include: [
                {
                    model: Program,
                    attributes: {
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
                            // required: true,
                        },
                        {
                            model : Schedule,
                            // subQuery: false,
                            // separate: true,
                            attributes : ['id','programId','startDate','startTime','endTime', 'description'],
                            // required: true,
                            // where : {
                            //     startDate : {
                            //         [Op.gte]:dateSelected
                            //     }
                            // },
                            // limit: 1,
                            // order: [['id','ASC']],
                        }
                    ]
                }
            ],
            where: {
                type
            }
        })
        .then((results) => {

            let resultProgram = []
            
            results.map((val) => {
                // console.log('Hasil Program')
                // console.log(val.Program)
                resultProgram.push(val.Program)
            })

            // console.log('==========================================================================================')
            // console.log(type)
            // console.log(resultProgram)

            return res.status(200).send({results: resultProgram})
        })
        .catch((err) => {
            console.log(err)
            return res.status(500).send({ status: 'error', message: err})
        })

    }
}
