/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema');

class UserSchema extends Schema {
  up() {
    this.create('users', (table) => {
      table.increments();
      table.string('username', 40).notNullable();
      table.string('email', 50).notNullable().unique();
      table.string('whatsapp', 15).notNullable().unique();
      table.string('cnpj', 18);
      table.string('cpf', 14);
      table.string('cadasPor', 30);
      table.string('updatedPor', 30);
      table.string('password', 20).notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop('users');
  }
}

module.exports = UserSchema;
