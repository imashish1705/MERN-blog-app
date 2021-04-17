import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { Button} from 'react-bootstrap';
import "./Blog.css";
 class Blog extends Component {
    render() {
        return (
            <div>
                <article className="Blog">
                    <h2>{this.props.title}</h2>
                    <img src = {this.props.img} alt = {this.props.title}/>
                    <h3>{this.props.author}</h3>
                    <p>{this.props.text}</p>
                    <Link to ={`/blogs/${this.props.id}`}>
                      <Button variant="primary" style={{margin:'20px'}}>More Info</Button>
                    </Link>
                </article>
            </div>
        )
    }
}
export default Blog;