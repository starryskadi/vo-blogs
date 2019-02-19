import React from 'react';
import Blog from './Blog/Blog';
import classes from './Blogs.module.scss';

import axios from 'axios';

export default class Blogs extends React.Component {
    state = {
        posts: null,
        page: 1,
    }
    
    componentDidMount () {
        axios.get('/posts?per_page=8&page='+this.state.page)
        .then((res) => {
            this.setState({posts: res.data});
            console.log(res.data);
        })
    }




    render() {
        let blogs = "Loading...! ";
        if (this.state.posts) {
            blogs = this.state.posts.map((post) => {
                return <Blog key={post.id} title={post.title.rendered} image={post.jetpack_featured_media_url} link={post.link}/>
            })
        }
        return(
            <>
            <h1> RECENET BLOGS </h1>
            <div className={classes.Blogs}> 
                {blogs}
            </div>
            </>
        )
    }
}