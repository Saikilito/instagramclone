import React from 'react';

import { Query } from 'react-apollo';
import gql from "graphql-tag";

import Toolbars from '../components/toobar';

const userItem = (user,i)=> <li key={`allUser${i}`}>{user.username}</li>

const Home = () => (
    <Query
        query={gql`
            {
              allUsers{
                  username
              }
            }
          `}
        >
        {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
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
