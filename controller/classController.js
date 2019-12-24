const { Class, Lecturer, sequelize, Sequelize} = require('../models')
const Op = Sequelize.Op;
const { uploader } = require('../helpers/uploader')
const { URL_API } = require('../helpers/urlapi')

var path = require('path')
var mime = require('mime')
const fs = require('fs')

module.exports = {
    createClass : async(req, res) => {
        const path = '/post/class';
    }
}