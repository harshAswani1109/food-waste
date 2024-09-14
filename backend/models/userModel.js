const sql = require("../config/db");

async function createUserTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name varchar(20) NOT NULL,
      username varchar(20) unique NOT NULL,
      phone_number varchar(15) unique NOT NULL,
      email varchar(50) unique NOT NULL,
      password varchar(30) NOT NULL
    )
  `;
}

createUserTable();

module.exports = {
  async createUser(user) {
    return await sql`
      INSERT INTO users (name, username, phone_number, email, password)
      VALUES (${user.name}, ${user.username}, ${user.phone_number}, ${user.email}, ${user.password})
      RETURNING *
    `;
  },

  async findUserByEmail(email) {
    return await sql`SELECT * FROM users WHERE email = ${email}`;
  },

  async findUserByUsername(username) {
    return await sql`SELECT * FROM users WHERE username = ${username}`;
  },

  // async findUserByName(name) {
  //   return await sql`SELECT * FROM users WHERE name = ${name}`;
  // },
};
