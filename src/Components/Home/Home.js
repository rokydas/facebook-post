import React, { useState, useEffect } from 'react';
import Post from '../Post/Post';
import { Container, Typography } from '@material-ui/core';

const Home = () => {

    const [posts, setPosts] = useState([])

    useEffect( () => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data))
    }, [])

    const shufflePost = (posts) => {
        for (let i = 0; i < posts.length; i++){
            const random = Math.floor(Math.random() * posts.length);
            const temp = posts[random];
            posts[random] = posts[i];
            posts[i] = temp;
        }
    }

    shufflePost(posts);

    return (
        <Container>
            {
                posts.map(post => <Post key={post.id} post={post}></Post>)
            }
        </Container>
    );
};

export default Home;