
const { DataSource } = require("typeorm");
const User = require("../models/userModel");
const Role= require("../models/roleModel")
const AppDataSource = new DataSource({
    type: process.env.TYPE,
    host: process.env.HOST,
    port: process.env.PORT_DB,
    username: process.env.USERNAME_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.NAME_DB,
    synchronize: true,
    logging: false,
    entities: [User,Role],
})

module.exports = AppDataSource;