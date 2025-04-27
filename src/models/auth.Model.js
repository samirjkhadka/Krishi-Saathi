const db = require("../config/db");



async function getUserByUsername(username) {
  const query = 'SELECT * FROM admin_users WHERE username = $1';
  const { rows } = await db.query(query, [username]);
  console.log('rows: ',rows);
  return rows[0];
}

module.exports = {  getUserByUsername };
