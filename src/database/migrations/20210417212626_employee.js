
exports.up = function(knex) {

    return knex.schema.createTable('employee', function (table) {
        table.increments('id').primary();
        table.string('rg').unique().notNullable();
        table.integer('cpf', 11).unique().notNullable();
        table.string('name', 100).notNullable();
        table.date('birthDate').notNullable();
        table.date('startDate').notNullable();
        table.date('endDate').notNullable();
        table.string('telphone', 20).notNullable();
        table.string('celphone', 20).notNullable();
        table.string('urlPhoto', 200).notNullable();  

        table.timestamp('createdAt').defaultTo(knex.fn.now());
        table.timestamp('updatedAt').defaultTo(knex.fn.now());

      }).then((result) =>{
        return result
    })
    .catch((err) => {
        return err
    }) 
  
};

exports.down = function(knex) {

    return knex.schema.dropTable('employee')
  
};
