const express = require('express');
const jwt = require("jsonwebtoken");
const authRoutes = require("./src/routes/authRoutes");
const roleRoutes = require("./src/routes/roleRoutes");
const userRoutes = require("./src/routes/userRoutes");

const app = express();
app.use(express.json());

app.use('/barapp/v1/auth', authRoutes);
app.use('/barapp/v1/role', roleRoutes);
app.use('/barApp/v1/users', userRoutes);

module.exports=app;