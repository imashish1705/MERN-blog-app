import React, { Component } from 'react'
import  {Route, Switch} from "react-router-dom";
import  BlogList from "./Components/Blog/BlogList"
import NavigationBar from "./Components/Blog/NavigationBar";
import ShowBlog from "./Components/Blog/ShowBlog";
import NewBlog from "./Components/Blog/NewBlog";
import EditBlog from "./Components/Blog/EditBlog";
class App extends Component {
  render() {
    return (
      <div className="main">
        <NavigationBar/>
        <Switch>
          <Route exact path = "/blogs" component ={BlogList}/>
          <Route exact path = "/blogs/new" component ={NewBlog}/>
          <Route exact path = "/blogs/:id" component ={ShowBlog}/>
          <Route exact path = "/blogs/:id/edit" component ={EditBlog}/>

        </Switch>
      </div>
    )
  }
}
export default App;
