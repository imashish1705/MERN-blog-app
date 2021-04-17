import React, { Component } from 'react'
import axios from "axios";
import{Button} from "react-bootstrap";
class NewBlog extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            title : "",
            img : "",
            author : "",
            text : ""
        }
    }
  changeHandler =(e) => {
      this.setState({[e.target.name]: e.target.value});
  }
  submitHandler = async(e) => {
      e.preventDefault();
      await axios.post("/blogs", this.state);
      // redirect to /blog page
      this.props.history.push("/blogs");
  }
    render() {
        return (
            <div style={{width:'70vw',margin:'10px auto',border:'1px solid #ccc',padding:'16px',fontSize:'24px' ,backgroundColor:"#fdbaf8"}}>
                <h1>Add New Blog</h1>
                <form onSubmit = {this.submitHandler}> 
                <lable htmlFor= "title">Title</lable>
                <br/>
                <br/>
                <input type = "text"
                placeholder = "Title"
                onChange = {this.changeHandler}
                name ="title"
                id = "title"
                />
                 <br/>
                    <br/>
<lable htmlFor= "image-URL">Image</lable>
               <br/>
                <br/>
<input type = "text"
                placeholder = "Image URL"
                onChange = {this.changeHandler}
                name ="img"
                id = "image-URL"
                />
                 <br/>
                    <br/>

<label htmlFor = "author">Author Name</label>
                <br/>
                <br/>
<input type = "text"
                placeholder = "authre's name"
                onChange = {this.changeHandler}
                name ="author"
                id = "author"
                />
                 <br/>
                    <br/>

<label htmlFor = "text">Your Blog Goes Here</label>
<               br/>
                <br/>
                <textarea
                        cols="50"
                        rows="5"
                        id="text"
                        name="text"
                        onChange={this.changeHandler}
                    >
                       
                    </textarea>      
                    <br/>
                    <br/> 
                    <Button variant = "warning">Submit</Button>
                </form>
            </div>
        )
    }
}
export default NewBlog;