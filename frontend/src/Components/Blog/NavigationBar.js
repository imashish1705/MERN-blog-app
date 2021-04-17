import React, { Component } from 'react'
import {Link} from "react-router-dom";
import { Nav,Navbar} from 'react-bootstrap';
class NavigationBar extends Component {
    render() {
        return (
            <div>

<Navbar bg="light" variant="light">
<Nav className="justify-content-center" activeKey="/home" bg="dark" >

    <Nav.Item>
      <Nav.Link href="/home"><Link to = "/blogs">All Blogs</Link> </Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/home"> <Link to = "/blogs/new">New Blog</Link>  </Nav.Link>
    </Nav.Item>

  </Nav>
  </Navbar>

 
     </div>
        )
    }
}
export default NavigationBar;