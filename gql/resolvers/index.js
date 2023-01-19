import Blog from "../../models/blog";

const resolvers = {
    Query: {
        getBlogs: async() => await Blog.find(),
        getBlogDetail: async(_, args) => await Blog.findOne({ _id: args.id })
    },

    Mutation: {
        addBlog: async (_, args) => {
            const blog = await Blog.create({
                title: args.title,
                description: args.description,
                category: args.category
            })
            return blog
        },

        updateBlog: async(_, args) => {
            const { id, title, description, category} = args
            const updatedBlog = await Blog.findOneAndUpdate({
                _id: id
            }, {
                title, description, category
            }, {
                new: true
            })
            return updatedBlog
        },

        deleteBlog: async(_, args) => {
            const { id } = args
            const deleteBlog = await Blog.findOneAndDelete({
                _id: id
            })
            return true
        },

    }
};

export default resolvers