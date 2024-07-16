import mysql from "mysql";

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "0124",
  database: "employee",
});

con.connect(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected");
  }
});

export default con;
