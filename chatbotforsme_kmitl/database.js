const mysql = require("mysql2");
const dbConnection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "chatbotforsmedb"
}).promise()

module.exports = dbConnection;