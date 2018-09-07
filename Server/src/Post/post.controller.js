var mongoose = require('./post.model');
var PostSchema = mongoose.model('Post');

var Controller = function () {
    this.insertPost = (data) => {
        
        return new Promise((resolve, reject) => {
            var post = new PostSchema(data);            
            post.save().then(() => {
                resolve({
                    status: 200,
                    message: "Post inserted"
                })
            }).catch((err) => {
                reject({
                    status: 500,
                    message: err
                })
            })
        })
    };

    this.getAll = () => {
        return new Promise((resolve, reject) => {
            PostSchema.find().exec().then((data) => {
                resolve({
                    status: 200,
                    posts: data
                })
            }).catch((err) => {
                reject({
                    status: 500,
                    message: "Error " + err
                })
            })

        })
    };

    this.getPost = (id) => {
        return new Promise((resolve, reject) => {
            PostSchema.find({
                _id: id
            }).exec().then((data) => {
                resolve({
                    status: 200,
                    post: data
                })
            }).catch((err) => {
                reject({
                    status: 404,
                    message: "Error:- Post not found "
                })
            })
        })
    }

    this.updatePost = (id, data) => {
        return new Promise((resolve, reject) => {
            PostSchema.update(
                { _id: id }, data).then(() => {
                    resolve({
                        status: 200,
                        message: "Post Udated Successfully"
                    })
                }).catch((err) => {
                    reject({
                        status: 500,
                        message: "Error:- " + err
                    })
                })
        })
    }

    this.deletePost = (id) => {
        return new Promise((resolve, reject) => {
            PostSchema.deleteOne({ _id: id }).then(() => {
                resolve({
                    status: 200,
                    message: "Post deleted"
                })
            }).catch((err) => {
                reject({
                    status: 500,
                    message: err
                })
            })
        })
    }    
}

module.exports = new Controller();