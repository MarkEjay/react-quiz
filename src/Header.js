import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <Navbar style={{ backgroundColor: 'grey' }}>
            <Container >
                <Navbar.Brand href="#home" style={{ fontWeight: 'bold', fontSize: '30px' }}>React-Quiz</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav style={{ fontSize: '20px' }}>
                        <Nav.Link href="/Question1">Question 1</Nav.Link>
                        <Nav.Link href="/Question2">Question 2</Nav.Link>
                        <Nav.Link href="/Question5">Question 5</Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


    )
}


export default Header;