// Require the fastify framework and instantiate it
const fastify = require('fastify')({
    logger: true
})

// Require external modules
const mongoose = require('mongoose')

// Import Swagger Options
const swagger = require('./config/swagger')

// Register Swagger
fastify.register(require('fastify-swagger'), swagger.options)

// Register CORS
fastify.register(require('fastify-cors'))


const issuesRoutes = require('./routes/issues.route')
const aliceRoutes = require('./routes/alice.route')

issuesRoutes.forEach((route, index) => {
    fastify.route(route)
})

aliceRoutes.forEach((route, index) => {
    fastify.route(route)
})

// Connect to DB
mongoose.connect("mongodb+srv://BCSAdmin:YA35kUEzURnayYf@cluster0.mrofz.mongodb.net/alice-jira-assistant", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))



// Run the server!
const start = async () => {
    try {
        const port = process.env.PORT
        await fastify.listen(port, '0.0.0.0')
        //await fastify.listen(63257, '0.0.0.0')
        fastify.swagger()
        fastify.log.info(`server listening on ${port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()

