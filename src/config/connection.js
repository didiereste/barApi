
const { DataSource } = require("typeorm");
const User = require("../models/userModel");
const Role= require("../models/roleModel")
const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "1234",
    database: "barapp",
    synchronize: true,
    logging: false,
    entities: [User,Role],
})

module.exports = AppDataSource;