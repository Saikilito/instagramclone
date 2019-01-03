import React from 'react';

import { Query } from 'react-apollo';
import gql from "graphql-tag";

import Toolbars from '../components/toobar';

const allUsers = gql`{
    allUsers{
        username
    }
}`;

const userItem = (user,i)=> <li key={`allUser${i}`}>{user.username}</li>

const Home = () => (
    <Query query={allUsers}>
        {
            ({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return console.log(error);
            return (
                [
                    <Toolbars/>,
                    <ul>
                    {
                        data.allUsers
                            .map(userItem)
                    }
                    </ul>
                ]
            );
        }}
    </Query>
);




export default Home
