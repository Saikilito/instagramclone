import React from 'react';

import { graphql } from 'react-apollo';
import gql from "graphql-tag";

import Toolbars from '../components/toobar';

const userItem = (user,i)=> <li key={`allUser${i}`}>{user.username}</li>

const Home = (props) => (
    <div>
        {
            (props.data.loading)  ? 
            <div>Loading</div>
            :
            [
                <Toolbars />,
                props.data.allUsers.map(userItem)
            ]
        }
    </div>
);

const allUsers = gql`{
    allUsers{
        username
    }
}`;

export default graphql(allUsers)(Home)