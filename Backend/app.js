const express = require('express')
const connectToDatabase = require('./database/DBConfig')
const Blog = require('./model/blogModel')
const app = express()
require('dotenv').config()
const fs = require('fs')
// access file data
app.use(express.json())
app.use(express.static('./storage'))

const {multer,storage} =require('./middleware/multerConfig')
const upload =multer({storage:storage})
// Connect Database
connectToDatabase()



// Create Blogs APIS
// Get all blogs api
app.get('/blog',async(req,res)=>{
    const blogs =await Blog.find()
    res.json({
        message:"Get All Blogs",
        data:blogs
    })
})

//get single blog api
app.get('/blog/:id',async(req,res)=>{
    const id =req.params.id
    const blog = await Blog.findById(id)
    res.json({
        message:"Single Blog",
        data:blog
    })
})

// Create blog api
app.post('/blog',upload.single('image'),async(req,res)=>{
    const {title,author_name,subtitle,content,description} =req.body
    const filename = req.file.filename
    await Blog.create({
        title:title,
        author_name:author_name,
        subtitle:subtitle,
        content:content,
        description:description,
        image:filename
    })
    res.json({
        message:"Blogs Created Successfully"
    })
})

// Delete blog api
app.delete('/blog/:id',async(req,res)=>{
    const id =req.params.id
    await Blog.findByIdAndDelete(id)
    res.json({
        message:"Blog Deleted Successfully"
    })
})

// Update blog api
app.patch('/blog/:id',upload.single('image'),async(req,res)=>{
    const id = req.params.id
    const {title,author_name,subtitle,content,description} =req.body
    let filename
    if(req.file){
         filename = req.file.filename
         const data =await Blog.findById(id)
         const oldfilename = data.image
         fs.unlink('storage/'+oldfilename,(err)=>{
            if(err){
                console.log(err)
            }else{
                console.log("File Deleted Successfully")
            }
         })
    }
    
    await Blog.findByIdAndUpdate(id,{
        title:title,
        author_name:author_name,
        subtitle:subtitle,
        content:content,
        description:description,
        image:filename
    })
    res.json({
        message:"Blog Updated Successfully"
    })
})

// set port number
app.listen(process.env.PORT,()=>{
    console.log("Project has been started on localhost:3000")
})