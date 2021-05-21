const mongoose = require('mongoose')

const issueSchema = new mongoose.Schema({
    id: String,
    keyNumber: String,
    name: String,
    projectKey: String,
    projectName: String,
    _v: Number
})

module.exports = mongoose.model('issues', issueSchema)