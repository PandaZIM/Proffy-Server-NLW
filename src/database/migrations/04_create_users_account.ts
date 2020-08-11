import Knex from 'knex'

export async function up(knex: Knex) {
    //cria tabela
    return knex.schema.createTable('users_account', table => {
        table.increments('id').primary();
        table.string('name').notNullable();
        table.string('lastName').notNullable();
        table.string('email').notNullable();
        table.string('passWord').notNullable();
    });
}

export async function down(knex: Knex) {
    //volta a tabela anterior
    return knex.schema.dropTable('users_account');
    }