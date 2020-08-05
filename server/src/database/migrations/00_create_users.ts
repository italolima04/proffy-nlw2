import Knex from "knex";

//Quais alterações eu quero realizar.
export async function up(knex: Knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("avatar").notNullable();
    table.string("whatsapp").notNullable();
    table.string("bio").notNullable();
  });
}

//Medidas de garantia para voltar em caso de erros.
export async function down(knex: Knex) {
  return knex.schema.dropTable("users");
}
