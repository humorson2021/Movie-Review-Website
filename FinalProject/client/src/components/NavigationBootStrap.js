import React from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useAuth0 } from "@auth0/auth0-react";

export default function NavigationBootStrap() {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <Navbar bg="light" expand="sm">
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="navContainer">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          <Nav.Link as={Link} to="/search">Search</Nav.Link>
          {isLoading?<img src="https://cdn.auth0.com/blog/auth0-react-sample/assets/loading.svg" alt="Loading"/>:
        isAuthenticated?<LogoutButton />:<LoginButton />}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}