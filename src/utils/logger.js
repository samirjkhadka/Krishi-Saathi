const db = require("../config/db");

async function logActivity(userId, activityType, description, ipAddress) {
  const query = `CALL log_activity($1, $2, $3, $4)`;
  const values = [userId, activityType, description, ipAddress];
  try {
    await db.query(query, values);
  } catch (error) {
    console.error("Error logging activity:", error.message);
  }
}

module.exports = logActivity;
