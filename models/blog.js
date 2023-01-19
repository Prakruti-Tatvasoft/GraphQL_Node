import mongoose from "mongoose"
const { Schema } = mongoose

const blogSchema = new Schema ({
    title: String,
    category: String,
    description: String,
    comments: [{
        message: String,
        rate: Number
    }]
})

const blogModel = mongoose.model('Blog', blogSchema, 'blogs')

export default blogModel