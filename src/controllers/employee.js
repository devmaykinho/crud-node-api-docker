const query = require('./util/queryExecute')

async function find(request, response) {

    const result = await query.selectAll('employee')

    return response.status(result.code).json(result.data)
}

async function findOne(request, response) {
    const { id } = request.params

    const result = await query.selectOne('employee', "rg", id)

    return response.status(result.code).json(result.data)
}

async function create(request, response) {
    const result = await query.create('employee', request.body, request.body.rg )

    return response.status(result.code).json(result.data)

}

async function update(request, response) {
    const {employeeId} = request.params
    
    const result = await query.update('employee', request.body, employeeId)
    
    return response.status(result.code).json(result.data)

}

async function remove(request, response) {

    const { employeeId } = request.params
    const result = await query.remove('employee',  employeeId)

    return response.status(result.code).json(result.data)

}

module.exports = {
    find,
    findOne,
    create,
    update,
    remove
}