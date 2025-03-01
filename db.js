import mysql2 from "mysql2";

export const db = mysql2.createConnection({
  host: "localhost",
  user: "root",
  port: "3000",
  password: "C&rsei123",
  database: "projetofullstack",
});
