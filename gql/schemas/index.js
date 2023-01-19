import { gql } from "apollo-server-express";

const typeDefs = gql`
    type blog {
        id: ID!,
        title: String!,
        description: String,
        category: String
    }

    type Query {
        getBlogs: [blog],
        getBlogDetail(id:ID!):blog
    }

    type Mutation {
        addBlog(title: String!, category: String!, description: String!): blog
        updateBlog(id: ID!, title: String!, category: String, description: String): blog
        deleteBlog(id: ID!): Boolean
    }
`;

export default typeDefs
