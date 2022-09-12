import React from 'react';
import './App.css';
import CreateUser from './CreateUser';
import About from './About';
import Contact from './Contact';
import Users from './Users';
import Home from './Home';
import { Link, Route, BrowserRouter, Routes } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';


function App() {

  // const [name,setName]=useState("anil Kumble");



  return (
    <div className="App">
      <BrowserRouter>


        <Navbar bg="primary" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home" className="home"><Link to="/">Home</Link></Nav.Link>
              <Nav.Link href="#features"><Link to="/about">About</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to="/contactus">Contact Us</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to="/Users">Users</Link></Nav.Link>
              <Nav.Link href="#pricing"><Link to="/createUsers">CreateUsers</Link></Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>

          <Route exact path="/"
            element={<Home />} />

          <Route exact path="/about"
            element={<About />} />

          <Route exact path="/contactus"
            element={<Contact />} />

          <Route exact path="/Users" element={<Users />} />

          <Route exact path="/createUsers" element={<CreateUser />} />

        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
