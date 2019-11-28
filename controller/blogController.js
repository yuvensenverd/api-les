const { Article, Sequelize } = require('../models');
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

    }

}