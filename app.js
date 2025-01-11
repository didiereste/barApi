const express = require('express');
const jwt = require("jsonwebtoken");
const authRoutes = require("./src/routes/authRoutes");
const roleRoutes = require("./src/routes/roleRoutes");

const app = express();
app.use(express.json());

app.use('/barapp/v1/auth', authRoutes);
app.use('/barapp/v1/role', roleRoutes)

module.exports=app;