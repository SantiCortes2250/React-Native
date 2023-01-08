import { config } from "./config";
import mysql from "mysql2";

const connect = async () =>{
    const conn = mysql.createConnection(config);

}

