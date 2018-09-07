var express = require('express');
var router = express.Router();
var postController = require('./post.controller');

router.get('/', (req,res)=> {
    postController.getAll().then((data) => {
        res.status(data.status).send(JSON.stringify(data.posts));
    })
})

router.get('/:id', (req,res)=> {
    postController.getPost(req.params.id).then((data) => {
        res.status(data.status).send(JSON.stringify(data.post));
    })
})

router.post('/', (req,res) => {
    postController.insertPost(req.body).then((data) => {
        res.status(data.status).send(JSON.stringify(data.message));
    })
})

router.put('/:id', (req,res) => {
    postController.updatePost(req.params.id, req.body).then((data) => {
        res.status(data.status).send(JSON.stringify(data.message));
    })
})

router.delete('/:id', (req,res) => {
    postController.deletePost(req.params.id).then((data) => {
        res.status(data.status).send(JSON.stringify(data.message));
    })
})

module.exports = router;