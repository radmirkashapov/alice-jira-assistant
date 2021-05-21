// External Dependancies
const boom = require('boom')

// Get Data Models
const Issue = require('../models/issue.model')

exports.getAll = async () => {
    try {
        return await Issue.find({})
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.getByIssueId = async ({issueId}) => {
    try {
        return await Issue.findByOne({issueId: issueId})
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.getByProjectAndKey = async ({projectName, taskKeyNumber}) => {
    try {
        let filter = {}
        filter['keyNumber'] = taskKeyNumber
        filter['projectKey'] = projectName
        const issue = await Issue.findOne({keyNumber: taskKeyNumber, projectKey: projectName});
        return issue
    } catch (err) {
        throw boom.boomify(err)
    }
}

exports.upsertIssue = async ({id, issue}) => {
    try {
        id ? Issue.findByIdAndUpdate(id, issue, { new: true }) : await new Issue(issue).save()
    } catch (err) {
        throw boom.boomify(err)
    }
}