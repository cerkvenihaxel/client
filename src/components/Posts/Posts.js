import React from 'react'
import Post from './Post/Post'
import useStyles from './styles'


const Posts = ()=> {
    const classes = useStyles();
    
    //Acordate que para este tipo de cosas se utiliza <> para el componente 
    
    return (

        <> 
        <h1> 
    Posts
        </h1>
    <Post />
    <Post />
    </>
    );
}

export default Posts;