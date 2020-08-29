// Set up MySQL connection.
var mysql = require("mysql");

if(process.env.JAWSDB_URL){
  connection=mysql.createConnection({
    host: "qn0cquuabmqczee2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "fzco8dxyl4k33voe",
  password: "	j58a7tr5lw5zpjj3",
  database: "	nfzmx3s9fdic7iys"});
}
else
{
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
  database: "burger_db"
});
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
