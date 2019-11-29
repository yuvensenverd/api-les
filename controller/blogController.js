const { Article, Sequelize, sequelize, Category, ArticleCategory } = require('../models');
const Op = Sequelize.Op;

const {uploader} = require('../helpers/uploader')
const fs = require('fs')


module.exports = {
    generateImgUrlquill(req,res){
        const path = '/post/blog'; //file save path
        const upload = uploader(path, 'PQuil').fields([{ name: 'image'}]); //uploader(path, 'default prefix')

        upload(req, res, (err) => {

            if(err){
                console.log('masuk2')
                return res.status(500).json({ message: 'Upload picture failed !', error: err.message });
            }
            const { image } = req.files;
            console.log(image)
            const imagePath = image ? path + '/' + image[0].filename : null;
            console.log(imagePath)
            if(imagePath){
                return res.status(200).send(imagePath)
            }else{
                return res.status(404).send('error')
            }
        })  
    },
    deleteFileQuill :  async (req,res) =>{ 
        console.log('delete file')
        var filepath = req.body.filepath
        console.log(filepath)

        try{
            await fs.unlinkSync('./public' + filepath);
            console.log('success')
            return res.status(200).send({message : ` Success Delete File IN ${filepath}`  })
        }
        catch(err){
            console.log(err)
            return  res.status(500).send({err})
        }
    },
    insertBlog : (req,res) =>{
        console.log(req.body)
        const { title, author, description,articleDate ,categoryId} =req.body

        Article.create({
            title,
            author,
            description,
            articleDate,
            // categoryId
        }).then((result)=>{
            console.log(result.dataValues.id)
            let rowsToInsert = []
            const articleId = result.dataValues.id
            for(let i = 0 ; i<categoryId.length; i++){
                rowsToInsert.push({
                    articleId,
                    categoryId : parseInt(categoryId[i])
                })
            }
            
 
            ArticleCategory.bulkCreate(rowsToInsert)
            .then((results)=>{
                return res.status(200).send({ message : 'success' , result : results})
            }).catch((err)=>{
                console.log(err)
                return res.status(500).send({ message : 'error', err})
            })
     
        }).catch((err)=>{
            return res.status(500).send({ message : "there's an error" , err })
        })
    },
    getBlog : (req,res) =>{
        console.log(req.body)
        Article.findOne({
            where :{
                id : req.body.id
            }
        }).then((result)=>{
            console.log(result)
            return res.status(200).send({message : 'success get blog' , result})
        }).catch((error)=>{
            console.log(error)
            return res.status(500).send({ message : 'theres an error ', error })
        })
    },
    getAllBlog : (req,res) =>{
        Article.findAll({
            attributes : 
            [
                'id',
                'title',
                'description',
                'author', 
                'articleDate', 
                // [sequelize.col('Category.name'), 'categoryName'],
            ],
            include : [
                {
                    model : Category,
                    required : true,
                    attributes : ['id', 'name'],
                    through: {
                        // This block of code allows you to retrieve the properties of the join table
                        model: ArticleCategory,
                        // as: 'productOrders',
                        attributes: [],
                    }

                }
            ]
            
        })
        .then((result)=>{
            console.log(result)
            return res.status(200).send({message : 'success get blog' , result})
        })
        .catch((error)=>{
            console.log(error)
            return res.status(500).send({ message : 'theres an error ', error })
        })
    }


}