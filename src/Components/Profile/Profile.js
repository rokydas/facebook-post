import React, { useEffect, useState } from 'react';
import { Box, Container } from '@material-ui/core';
import './Profile.css';

const Profile = () => {

    const [user, setUser] = useState({});

    useEffect(() => {
        fetch('https://randomuser.me/api')
        .then(res => res.json())
        .then(data => {
            console.log(data.results[0])
            const allData = 
            {
                name: data.results[0].name.title + ' ' + data.results[0].name.first + ' ' + data.results[0].name.last, 
                email: data.results[0].email, 
                cell: data.results[0].cell,
                phone: data.results[0].phone,
                age: data.results[0].dob.age,
                gender: data.results[0].gender,
                picture: data.results[0].picture.large
            }
            setUser(allData);
        })
    }, [])

    return (
        <Container>
            <Box color="primary.main" className="profile">
                <h1>User Profile</h1>
                <img src={user.picture} alt=""/>
                <h3>Name: {user.name}</h3>
                <h3>Email: {user.email}</h3>
                <h3>Cell: {user.cell}</h3>
                <h3>Phone: {user.phone}</h3>
                <h3>Age: {user.age}</h3>
                <h3>Gender: {user.gender}</h3>
            </Box>
        </Container>
        
    );
};

export default Profile;