// app.js
const postgres = require("postgres");
require("dotenv").config();

// let { PGHOST, PGDATABASE, PGUSER, PGPASSWORD, ENDPOINT_ID } = process.env;

const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL);

// const sql = postgres({
//   host: PGHOST,
//   database: PGDATABASE,
//   username: PGUSER,
//   password: PGPASSWORD,
//   port: 5432,
//   ssl: "require",
//   connection: {
//     options: `project=${ENDPOINT_ID}`,
//   },
// });

// async function getPgVersion() {
//   const result = await sql`select version()`;
//   console.log(result);
// }

// getPgVersion();

module.exports = sql;
