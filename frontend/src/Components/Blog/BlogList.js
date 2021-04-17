import React, { Component } from 'react';
import Blog from './Blog';
import axios from 'axios';
import "./Blog.css"


class BlogList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            blogs:[]
        }
    }

    async componentDidMount() {
        const blogs = await axios.get('/blogs');
        // console.log(blogs);
        this.setState({ blogs: blogs.data });
    }

    render() {

        let allBlogs = this.state.blogs.map(b => {
            return <Blog
                key={b._id}
                title={b.title}
                img={b.img}
                author={b.author}
                text={b.text}
                id={b._id}
            />
        })


        return (
            <div>
                
            <h1 className ="Heading">My Blog App</h1>
                {allBlogs}
            </div>
        );
    }
}

export default BlogList;