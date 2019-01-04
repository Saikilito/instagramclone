import gql from "graphql-tag";

export default {
    query:{

    },
    mutation:{
        createUser: gql`
        mutation createUser($username: String!, $fullname: String!, $email: String!, $password: String!){
            createUser(username:$username, fullname:$fullname, email:$email, password:$password){
                success
                errors{
                    path
                    message
                }
            }
        }`
    }
    // subscription:{

    // }
}