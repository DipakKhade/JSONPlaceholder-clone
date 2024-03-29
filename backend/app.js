import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors'
import { post } from './sitejson/post.js';
import { commants } from './sitejson/commants.js';
import { albums } from './sitejson/albums.js';
import { photos } from './sitejson/photos.js';
import { todos } from './sitejson/todos.js';
import { users } from './sitejson/users.js';


dotenv.config();
const PORT=process.env.PORT   || 8000 ;
console.log(PORT)

const app=express();
app.use(cors());

app.get('/post',function(req,res){
    res.json(post)
})

app.get('/post/:postId',function(req,res){
    const postId = req.params.postId;
    
    const posts = post.find(post => post.id === parseInt(postId));
    if (posts) {
        res.json(posts);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
})


app.get('/commants',function(req,res){
    res.json(commants)
})


app.get('/albums',function(req,res){
    res.json(albums)
})

app.get('/photos',function(req,res){
    res.json(photos)
})


app.get('/todos',function(req,res){
    res.json(todos)
})

app.get('/users',function(req,res){
    res.json(users)
})


app.listen(PORT,function(){
    console.log('server is up and running ')
})