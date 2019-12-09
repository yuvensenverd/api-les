const { Article, Sequelize, sequelize, Category, ArticleCategory } = require('../models');
const Op = Sequelize.Op;
const Crypto = require('crypto');

const {uploader} = require('../helpers/uploader')

var path = require('path')
var mime = require('mime')
const fs = require('fs')


module.exports = {
    generateImgUrlquill(req,res){
        console.log(req.query.name.split('.')[0].replace(/ /g, '-'))
        // console.log(req.body.name)
        const path = '/post/blog'; //file save path
        const upload = uploader(path, `${req.query.name.split('.')[0].replace(/ /g, '-')}`).fields([{ name: 'image'}]); //uploader(path, 'default prefix')

        upload(req, res, (err) => {
            // console.log(req.body)
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
    insertBlog : async (req,res) =>{
        const path = '/post/blog'; //file save path
        const upload = uploader(path, 'PQuil').fields([{ name: 'image'}]);
        let lastId = ''
        await Article.findOne({
            attributes:['id'],
            order: [['createdAt', 'DESC']]
        }).then((result)=>{
            lastId=result.id+1
        })
        let encryptId = Crypto.createHmac('md5', 'ngelesapi').update(toString(lastId)).digest('hex')
        console.log('-------->' , lastId, typeof(lastId))
        console.log('-------->', encryptId)

  
        // const uploaddata = uploader(pathdata, 'blog').fields([{
        //     name: 'image', maxCount: 1
        // }])
        // uploader(pathfile, 'PQuill').single()


        // if(req.query.ebook === 'true'){

        //     uploadfile(req,res, (err)=>{
        //         if(err){
        //             console.log('masuk2')
        //             console.log(err)
        //             return res.status(500).json({ message: 'Upload picture failed !', error: err.message });
        //         }
        //     })
        // }


        uploadfile(req, res, (err) => {
            if(err){
                console.log(err)
                console.log('masuk2')
                return res.status(500).json({ message: 'Upload picture failed !', error: err.message });
            }
            console.log('uploaded')
            console.log(req.body)

            const { image } = req.files;
            console.log(image)
            const imagePath = image ? path + '/' + image[0].filename : null;
            console.log(imagePath)

            const { title, author, description,articleDate ,categoryId, slug } = JSON.parse(req.body.data);

            Article.create({
                title,
                author,
                description,
                articleDate,
                banner: imagePath,
                slug : slug+`-${encryptId}`
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
        })
    },
    getBlog : (req,res) =>{
        console.log(req.body)
        Article.findOne({
            where :{
                // id : req.body.id,
                slug : req.body.slug
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
        console.log(req.body)
        var { offset, limit, categoryId } = req.body;

        

        Article.findAll({
            // limit:parseInt(limit),
            limit:limit,
            // limit : 10,
            offset:offset,
            subQuery: true,
          
            attributes : 
            [
                'id',
                'title',
                'description',
                'author', 
                'articleDate',
                'slug'
                // [sequelize.col('Categories.name'), 'categoryName'],
                // [sequelize.col('Categories.id'), 'categoryId'],
                // [sequelize.col('Category.name'), 'categoryName'],
            ],
            include : [
                {
                    model : Category,
        
                    required : true,
                    attributes : ['id', 'name'],
                    through: {
           
                        model: ArticleCategory,
                        limit : 1, // SUPAYA HANYA NGEGET 1 ROW, NGGA NGACAUIN LIMIT DIATAS
                        // separate : true,
  
                        attributes: [],
                    },
                    where : {
                        id : {
                            [Op.in] :  categoryId
                        }
                    }

                }
            ]
            
        })
        .then((result)=>{
            console.log(result)
            ArticleCategory.count({
                // distinct : true,
                distinct: true,
                col: 'articleId',
                where : {
                    categoryId : {
                        [Op.in] :  categoryId
                    }
                },
            })
            .then((result2)=>{
                console.log(result2)
                return res.status(200).send({message : 'success get blog' , result : result , count : result2})
            }).catch((error2)=>{
                console.log(error2)
                return res.status(500).send({ message : 'theres an error ', error : error2 })
            })

        })
        .catch((error)=>{
            console.log(error)
            return res.status(500).send({ message : 'theres an error ', error })
        })
    },
    downloadEbook : (req, res) =>{

        console.log(req.body)
        let file =  `${__dirname}/../public/upload/bannernol.png`;
        // let file =  `${__dirname}/../public/upload/bannernol.png`;
     
        let filename = path.basename(file);
        console.log(filename)
        let mimetype = mime.lookup(file);
        console.log(mimetype)

        res.setHeader('Content-disposition', 'attachment; filename='+filename);
        res.setHeader('Content-type', mimetype);
// res.download(__dirname + '/data.xlsx');
        res.download(`${__dirname}/../public/upload/bannernol.png`, 'bannernol.png',  (err) => {
            if (err) {
              console.log(err)
              return res.status(500).send({ message : 'theres an error ', error : err })
            } else {
              console.log('success')
              return res.status(200).send({ message : 'success ' })
            }
        })

        // let file =  `${__dirname}/../public/upload/bannernol.png`;

        // let filename = path.basename(file);
        // console.log(filename)
        // let mimetype = mime.lookup(file);
        // console.log(mimetype)
      
        // res.setHeader('Content-disposition', 'attachment; filename=' + filename);
        // res.setHeader('Content-type', mimetype);
      
        // let filestream = fs.createReadStream(file);
        // filestream.pipe(res);
    }
    // getBlogs : (req,res) =>{


    //     Article.findAll({
          
    //         attributes : [
    //             'id',
    //             'title',
    //             'description',
    //             'author', 
    //             'articleDate', 

    //         ],
    //         include : [
    //             {
    //                 model : ArticleCategory,
    //                 attributes : [],
    //                 where : {
    //                     categoryId : req.body.categoryId
    //                 } 
    //             }
    //         ]
    //     })
    //     .then((result)=>{
    //         return res.status(200).send({ message : 'success get ' , result})
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //         return res.status(500).send({ message : 'theres an error ', error })
    //     })
    // }


}

