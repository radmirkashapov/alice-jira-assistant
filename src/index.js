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


const issuesRoute = require('./routes/issues.route')

issuesRoute.forEach((route, index) => {
    fastify.route(route)
})


// Connect to DB
mongoose.connect("mongodb://localhost:27017/alice-jira-assistant", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err))



// Run the server!
const start = async () => {
    try {
        //await fastify.listen(process.env.PORT, '0.0.0.0')
        await fastify.listen(63257, '0.0.0.0')
        fastify.swagger()
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()

