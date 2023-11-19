import React from 'react';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { FaShoppingCart, FaUser} from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';
import { useLocation } from 'react-router-dom';
import { PiGlobeStand } from "react-icons/pi";
import '../assets/styles/index.css';

const Header = ({ userInfo, logoutHandler }) => {
  // Get the current location using useLocation hook
  const location = useLocation();

  return (
    <header>
      <Navbar className="navi" expand="lg" collapseOnSelect sticky='top'>
        <Container fluid id="navcontainer">
          <LinkContainer to="/">
          <Navbar.Brand>
          <PiGlobeStand style={{ color: '#ffd700' }} />
          <span className="brand-text">STYLESPHERE</span>
          </Navbar.Brand>  
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {/* Men's and Women's Categories */}
            <Nav>
              <NavDropdown title="MEN" id="men-dropdown">
                {/* Men's Topwear Subcategories */}
                <LinkContainer to="/menswear/shirt">
                  <NavDropdown.Item>Shirt</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/menswear/tshirt">
                  <NavDropdown.Item>Tshirt</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/menswear/jacket">
                  <NavDropdown.Item>Jackets</NavDropdown.Item>
                </LinkContainer>

                {/* Men's Bottomwear Subcategories */}
                <LinkContainer to="/menswear/jeans">
                  <NavDropdown.Item>Jeans</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/menswear/trousers">
                  <NavDropdown.Item>Trousers</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/menswear/shots">
                  <NavDropdown.Item>Shorts</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              {/* Women's Category and Subcategories */}
              <NavDropdown title="WOMEN" id="women-dropdown">
                {/* Women's Topwear Subcategories */}
                <LinkContainer to="/womenswear/top">
                  <NavDropdown.Item>Tops</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/womenswear/kurti">
                  <NavDropdown.Item>Kurtis</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/womenswear/jacket">
                  <NavDropdown.Item>Jackets</NavDropdown.Item>
                </LinkContainer>

                {/* Women's Bottomwear Subcategories */}
                <LinkContainer to="/womenswear/jeans">
                  <NavDropdown.Item>Jeans</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/womenswear/trouser">
                  <NavDropdown.Item>Trousers</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>

            {/* SearchBox Component */}

            {/* Right-aligned Nav Links */}
            <Nav className="ms-auto">
              {/* Cart Link */}
              <LinkContainer to="/cart">
                <Nav.Link active={location.pathname.endsWith('/cart')}>
                  <FaShoppingCart /> Cart
                </Nav.Link>
              </LinkContainer>

              {/* Admin Links (if user is admin) */}
              {userInfo && userInfo.isAdmin && (
                <NavDropdown title="Manage" id="adminmenu">
                  <NavDropdown title="Products">
                    <LinkContainer to="/admin/menproductslist">
                      <NavDropdown.Item>MENS</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to="/admin/womenproductslist">
                      <NavDropdown.Item>WOMENS</NavDropdown.Item>
                    </LinkContainer>
                  </NavDropdown>
                  <LinkContainer to="/admin/orderlist">
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/userlist">
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to="/admin/contacts">
                    <NavDropdown.Item>Queries</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}

              {/* User Profile and Sign Out Links */}
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link active={location.pathname.endsWith('/login')}>
                    <FaUser /> Sign In
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
