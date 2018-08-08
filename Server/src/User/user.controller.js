var UserSchema = require('./user.model').model('User');
var config = require('../../config/auth');
var jwt = require('jsonwebtoken');

function Controller() {

    this.login = (user) => {
        let {username, password} = user;
        return new Promise((resolve,reject)=> {
            UserSchema.findOne({
                username: user.username
            }).exec().then((data) => {
                console.log(data.id)
                var token = jwt.sign({ id: data._id }, config.secret, {
                    expiresIn: 86400 // expires in 24 hours
                });
                if(data.password == password)
                    resolve({
                        status: 200,
                        auth: true,
                        user: data,
                        token: token,
                        message: "Logged in successfully"
                    })
                else
                    resolve({
                        status: 401,
                        message: "incorrect password",
                        auth: false
                    })
            }).catch((err)=> {
                reject({
                    status: 500,
                    message: "Failed to login"
                })
            })

        })
    };

    this.signup = (user) => {
        let {username, password} = user;

        return new Promise((resolve,reject)=> {
            let userData = {
                username: username,
                password: password
            };
            let newUser = new UserSchema(userData);
            newUser.save().then(()=> {
                resolve({
                    status: 201, 
                    message: 'signup successful',
                    auth: true
                });
            }).catch((err)=>{
                console.log(JSON.stringify(error, null, 2)); // you might want to do this to examine and trace where the problem is emanating from
                reject({
                    status:500,
                    message: 'error signing up user',
                    auth:false
                })
            })

        })
    };

    this.getAll = () => {        
        return new Promise((resolve,reject)=> {
            UserSchema.find().exec().then((data) => {
                resolve({
                    status: 200,
                    users: data
                })
            }).catch((err)=> {
                reject({
                    status: 500,
                    message: "Error "  + err
                })
            })

        })
    };

}

module.exports = new Controller();