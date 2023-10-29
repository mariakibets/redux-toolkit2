import React from 'react';
import Header from '../../components/Header';
import UserList from '../../components/UserList';

const UserPage = () => {
    return (
        <>
            <Header/>
            <h1>For clients</h1>
            <UserList/>
        </>
    );
}

export default UserPage;
