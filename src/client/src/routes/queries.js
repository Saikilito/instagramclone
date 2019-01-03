import gql from "graphql-tag";

export const ADD_USER =  gql`
    mutation createUser($username: String!, $password: String!, $fullname: String!, $email: String!){
        createUser(username:$username, password:$password, fullname:$fullname, email:$email)
}`;