var Express = require("express");
var Routes = Express.Router();

var authRoutes = require('./src/User/auth.routes');
var userRoutes = require('./src/User/user.routes');
var postRoutes = require('./src/Post/post.routes');

Routes.use('/auth', authRoutes);
Routes.use('/user', userRoutes);
Routes.use('/post', postRoutes);

module.exports = Routes;