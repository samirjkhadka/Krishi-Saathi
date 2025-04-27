const db = require("../config/db");

async function getUserByEmail(email) {
  const query = "SELECT * FROM users WHERE email = $1";
  const values = [email];
  try {
    const result = await db.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error fetching user by email:", error.message);
    return null;
  }
}

async function getUserByUsername(username) {
  const query = "SELECT * FROM users WHERE username = $1";
  const values = [username];
  try {
    const result = await db.query(query, values);
    return result.rows[0];
  } catch (error) {
    console.error("Error fetching user by username:", error.message);
    return null;
  }
}

module.exports = { getUserByEmail, getUserByUsername };
