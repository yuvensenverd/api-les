const userRouter = require('./userRouter');
const categoryRouter = require('./categoryRouter');
const blogRouter = require('./blogRouter');
const adminRouter = require('./adminRouter')
const payment = require('./paymentRouter')
const locationRouter = require('./locationRouter')


module.exports = {
    userRouter,
    categoryRouter,
    blogRouter,
    adminRouter,
    payment,
    locationRouter
}