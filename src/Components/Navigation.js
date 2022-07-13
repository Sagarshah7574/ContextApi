import { useContext } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  return (
    <Navbar bg="dark" variant="dark" float="start" style={{ height: 100 }}>
      <Container>
        <Navbar.Brand>
          <NavLink to="/">Products</NavLink>
        </Navbar.Brand>

        {/* <Dropdown  alignRight>
            <Dropdown.Toggle variant="success">

              <FaShoppingCart color="white" fontSize="25px" />
              <Badge></Badge>
            </Dropdown.Toggle>
            <Dropdown.Menu style={{minWidth:370}}> */}
        {/* {console.log(props, "amit")} */}
        <NavLink to="/cart">Cart ({props.cartItemNumber})</NavLink>
        <Nav>
          {/* </Dropdown.Menu> 
                </Dropdown>
                   */}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;
