import React, { useContext } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import { formatCurrency } from "../helpers/format";
import { Link, NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

function NavbarApp() {
  const { amount } = useContext(CartContext);
  const { token } = useContext(AuthContext)
  console.log(token);
  
  const setActiveClass = ({ isActive }) =>
    isActive
      ? "text-warning mt-2 pe-2 text-decoration-none"
      : "text-white mt-2 pe-2 text-decoration-none";

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container className="d-flex justify-content-between align-items-center">
        <Nav className="d-flex align-items-center gap-2">
          <Navbar.Brand as={Link} to="/">
            Pizzería Mamma Mia!
          </Navbar.Brand>

          {/* Usar `as={Link}` para los botones */}
          <Button className="btn-sm" variant="outline-light">
            <NavLink to="/" className={setActiveClass}>
              🍕Home
            </NavLink>
          </Button>

          {token ? (
            <>
              <Button className="btn-sm" variant="outline-light">
                <NavLink to="/profile" className={setActiveClass}>
                  🔓Profile
                </NavLink>
              </Button>

              <Button className="btn-sm" variant="outline-light">
                <NavLink to="/Logout" className={setActiveClass}>
                  🔒Logout
                </NavLink>
              </Button>
            </>
          ) : (
            <>
              <Button className="btn-sm" variant="outline-light">
                <NavLink to="/LoginPage" className={setActiveClass}>
                  🔐Login
                </NavLink>
              </Button>
              <Button className="btn-sm" variant="outline-light">
                <NavLink to="/registerPage" className={setActiveClass}>
                  🔐Register
                </NavLink>
              </Button>
            </>
          )}
        </Nav>

        {token && (
          <Button className="btn-sm" variant="outline-info">
            <NavLink to="/Cart" className={setActiveClass}>
              🛒Total: {formatCurrency(amount)}
            </NavLink>
          </Button>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
