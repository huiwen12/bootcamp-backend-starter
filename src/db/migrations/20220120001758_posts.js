
exports.up = async knex => knex.schema.createTable('posts', table => {
  table
    .uuid('id')
    .primary()
    .notNullable()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table
    .string('copyright')

  table
    .string('title')

  table
    .string('date')
    .notNullable()
    .unique()

  table
    .string('url')
    .notNullable()

  table
    .text('explanation')
    .notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
