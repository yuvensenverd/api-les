const { Program, Lecturer, sequelize, Sequelize, programpicture, User, LecturerProgram, Location, Room, Category, Schedule, BookingOrder} = require('../models')
const Op = Sequelize.Op;
const { uploader } = require('../helpers/uploader')
const { URL_API } = require('../helpers/urlapi')
const Crypto = require('crypto');

var path = require('path')
var mime = require('mime')
const moment = require('moment')
const fs = require('fs')
const {transporter} = require('../helpers/mailer')
const numeral = require('numeral')

module.exports = {
    bookingClass: (req, res) => {
        console.log('==================== booking Class =============')
        // console.log(req)
        // console.log(req.body)
        const {
            programId,
            venueId,
            quantity,
            nama,
            namaKelas,
            price,
            jenis_kelamin,
            domisili,
            phone,
            schedule,
            emailTo,
        } = req.body

        const {
            id,
            email
        } = req.user

        let schedules= ''
        for(let i=0; i<schedule.length; i++){
            schedules += `<tr><td> Sesi ${i+1} : ${moment(schedule[i].startDate).format('DD-MMM-YY')} - ${moment(schedule[i].endDate).format('DD-MMM-YY')} Pukul : ${moment(schedule[i].startTime, 'HH:mm').format('HH:mm')} - ${moment(schedule[i].endTime, 'HH:mm').format('HH:mm')} | ${schedule[i].description}</td></tr>`
        }

        BookingOrder.create({
            userId: id,
            programId,
            venueId,
            quantity,
        })

        .then((result)=>{
            res.status(200).send({message: 'success', results: result})
            let mailOptions = {
                from: 'ngeles.co Admin <operational@ngeles.co>',
                    to: emailTo,
                    subject: `New inquiry from ${nama}`,
                    html: `
                            <div>
                                <table>
                                    <tr><th  align="left" style="border-bottom: 1px solid black;">Detail Peserta</th></tr>
                                    <tr>
                                        <th align="left" width="30%">Nama</th><td>: ${nama}</td>
                                    </tr>
                                    <tr>
                                        <th align="left">No. Telepon</th><td>: ${phone}</td>
                                    </tr>
                                    <tr>
                                        <th align="left">Email</th><td>: ${email}</td>
                                    </tr>
                                    <tr>
                                        <th align="left">Jenis Kelamin</th><td>: ${jenis_kelamin}</td>
                                    </tr>
                                    <tr>
                                        <th align="left">Domisili</th><td>: ${domisili}</td>
                                    </tr>
                                    <tr><td><span style="color:#fff;">.</span></td></tr>
                                    <tr><th align="left" style="border-bottom: 1px solid black;">Detail Pesanan</th></tr>
                                    <tr>
                                        <th align="left">Nama Kelas</th><td>: ${namaKelas}</td>
                                    </tr>
                                    <tr>
                                        <th align="left">Pax</th><td>: ${quantity}</td>
                                    </tr>
                                    <tr>
                                        <th align="left" valign="top" rowspan=${schedule.length+1}>Schedule</th>
                                    </tr>
                                    ${schedules}
                                    <tr>
                                        <th align="left">Total Harga</th><td>: Rp. ${numeral(quantity*price).format(0,0)}</td>
                                    </tr>
                                </table>
                                <hr />
                            </div>`
            }

            transporter.sendMail(mailOptions, (err1, res1) => {
                if (err1) {
                    console.log(err1)
                    return res.status(500).send({ status: 'error', err: err1 })
                }
                console.log('succ!?')
                console.log(res1)

                return res.status(200).send({
                    result: results
                });

            })
        })
        .catch((err)=>{
            console.log(err)
        })
    },
    getAll: (req, res)=>{
        BookingOrder.findAll({
            attributes: {
                exclude: ['updateAt']
            },
            include: [
                {
                    model: User,
                    attributes:{
                        exclude: ['createdAt','updatedAt']
                    }
                },
                {
                    model: Location,
                    attributes: {
                        exclude: ['createdAt','updatedAt']
                    }
                },
                {
                    model: Program,
                    attributes:{
                        exclude: ['createdAt','updatedAt']
                    }
                }
            ]
        })
        .then((result1)=>{
            res.status(200).send({message: 'success', results: result1})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    
    
}