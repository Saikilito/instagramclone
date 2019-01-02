export default `
    type UserShort {
        _id:ID!
        username: String!
        thumbnail: String
    }
    type Post{
        _id: ID!
        by: UserShort
        desc:String
        photo: String
        likeBy:[UserShort] 
        comments:[UserShort]
        createAt: String
    }
    type Query{
        getPost(_id:ID!): Post!
    }
    input iBy{
        username: String
        tumbnail: String
    }
    input iPost{
        desc:String
        photo: String
    }
    type Mutation{
        createPost(post: iPost): Post!
    }
`;