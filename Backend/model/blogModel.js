const mongoose = require('mongoose')
const Schema =mongoose.Schema

const blogSchema =new Schema({
    title:{
        type:String
    },
    author_name:{
        type:String
    },
    subtitle:{
        type:String
    },
    content:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    }

})

const Blog =mongoose.model('Blog',blogSchema)

module.exports = Blog