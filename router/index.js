const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const blogRouter = require('./blogRouter');
const adminRouter = require('./adminRouter')
const payment = require('./paymentRouter')
const locationRouter = require('./locationRouter')
const programRouter = require('./programRouter');
const lecturerRouter = require('./lecturerRouter')
const bookingOrderRouter = require('./bookingOrderRouter')
const topClassHomeRouter = require('./topClassRouter');


module.exports = {
    userRouter,
    categoryRouter,
    blogRouter,
    adminRouter,
    payment,
    locationRouter,
    programRouter,
    lecturerRouter,
    bookingOrderRouter,
    topClassHomeRouter
}