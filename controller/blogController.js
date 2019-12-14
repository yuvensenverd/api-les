const { Article, Sequelize, sequelize, Category, ArticleCategory } = require('../models');
const Op = Sequelize.Op;
const Crypto = require('crypto');

const {uploader } = require('../helpers/uploader')
var jimp = require('jimp');
const { URL_API } = require('../helpers/urlapi')

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
            console.log(JSON.parse(req.body.data));

         
            jimp.read(URL_API + imagePath,  (err, image) => {
                if (err) {
                    throw err;
                }
                console.log('a')
                console.log(imagePath)
                 fs.unlinkSync('public' + imagePath)
                console.log('B')
                image
                .resize(1366, jimp.AUTO)
                .quality(70)
                .write('public' + imagePath)
              });

           

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
        // const upload = uploader(path, `${req.query.name.split('.')[0].replace(/ /g, '-')}`).fields([{ name: 'image'}]);
        const uploaddata = uploader(path, `${req.query.name.split('.')[0].replace(/ /g, '-')}`).fields([{
            name: 'image', maxCount: 1
        },{
            name: 'ebook', maxCount: 1
        }])
        
        let lastId = ''
        await Article.findOne({
            attributes:['id'],
            order: [['createdAt', 'DESC']]
        }).then((result)=>{
            lastId=result.id+1
        })
        let encryptId = Crypto.createHmac('md5', 'ngelesapi').update(toString(lastId)).digest('hex')
        // console.log('-------->' , lastId, typeof(lastId))
        // console.log('-------->', encryptId)

  

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


        uploaddata(req, res, (err) => {
            if(err){
                console.log(err)
                console.log('masuk2')
                return res.status(500).json({ message: 'Upload picture failed !', error: err.message });
            }
            // console.log('uploaded')
            // console.log(req.body)

            const { image, ebook } = req.files;
            console.log(req.files)
            console.log('ini imej')
            console.log(image)
            const imagePath = image ? path + '/' + image[0].filename : null;

            // if(image.length > 1){
            //     const imagePath2 = image ? path + '/' + image[1].filename : null;
            //     console.log(imagePath2)
            // }else {
            //     const imagePath2 = null
            // }

            const imagePath2 = ebook ? path + '/' + ebook[0].filename : null;
            

            // read = full url + image pathnya
            // fs.unlinkSync untuk hapus gambarnya ngarah ke public
            // write ngarah ke public
            
            jimp.read(URL_API + imagePath, (err, image) => {
                if (err) {
                    throw err;
                }

                fs.unlinkSync('public' + imagePath)

                image
                .resize(1366, jimp.AUTO)
                .quality(70)
                .write('public' + imagePath)
              });

            const { title, author, description,articleDate ,categoryId, slug } = JSON.parse(req.body.data);

            Article.create({
                title,
                author,
                description,
                articleDate,
                banner: imagePath,
                ebook : imagePath2 ? imagePath2 : null,
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
    editBlog: (req, res) => {
        Article.findOne({
            where:{
                slug: req.query.slug
            },
            attributes: ['slug', 'banner', 'id', 'title']
        }).then((result1)=>{
            // console.log(result1.dataValues.banner)
            if(result1){
                
                const path = '/post/blog';
                const upload = uploader(path, `${req.query.name.split('.')[0].replace(/ /g, '-')}`).fields([{ name : 'image'}]);
                console.log('---------------------------------->>>>>>>>>>> masuk edit')
        
                upload(req,res, (err) => {
                        if(err){
                            console.log(err)
                            console.log('ada error')
                            return res.status(500).json({ message: 'Upload picture failed !', error: err.message})
                        }
            
                        const { image } = req.files;
                        const imagePath = image ? path + '/' + image[0].filename : null;
                        
                        if(imagePath){
                            fs.unlinkSync('./public'+ result1.dataValues.banner)
                        }
                            
                    
                    const { id,title, author, description,articleDate ,categoryId, slug } = JSON.parse(req.body.data);
                    let encryptId = Crypto.createHmac('md5', 'ngelesapi').update(toString(id)).digest('hex')
                    Article.findOne({
                        where: {
                            title
                        },
                        attributes: ['title']
                    }).then((result2)=>{
                        let slugChange = false
                        if(!result2){
                            slugChange=true
                        }

                        Article.update({
                            title, 
                            author,
                            description,
                            banner: imagePath ? imagePath : result1.dataValues.banner,
                            slug : slugChange ? slug+`-${encryptId}` : slug
                        },{
                            where: {
                                id
                            }
                        })
                        .then((result3)=>{
                            console.log(result3)
                            ArticleCategory.destroy({
                                where: {
                                    articleId: id
                                }
                            }).then((result4)=>{
                                let rowsToInsert = []
                                const articleId = id
                                for(let i = 0 ; i<categoryId.length; i++){
                                    rowsToInsert.push({
                                        articleId,
                                        categoryId : parseInt(categoryId[i])
                                    })
                                }
                                
                    
                                ArticleCategory.bulkCreate(rowsToInsert)
                                .then((results)=>{
                                    Article.findOne({
                                        where:{
                                            id
                                        },
                                        attributes: ['slug']
                                    }).then((result5)=>{
                                        return res.status(200).send({ message : 'success' , result : result5})
                                    })
                                    .catch((err)=>{
                                        console.log(err)
                                        return res.status(500).send({ message : 'error', err})
                                    })
                                })
                            })
                        })
                    })
                })
            }
        })
        

    },
    getBlog : (req,res) =>{
        console.log(req.body)
        Article.findOne({
            where :{
                // id : req.body.id,
                slug : req.body.slug
            },
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
                    // where : {
                    //     id : {
                    //         [Op.in] :  categoryId
                    //     }
                    // }

                }
            ], 
            order: [['id', 'DESC']]
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
            limit:parseInt(limit),
            // limit:2,
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
                'banner',
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

