import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
function NavbarComp() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Front-End-M5</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Usuarios</Nav.Link>
            <Nav.Link href="#pricing">Tarefas</Nav.Link>
          </Nav>
        </Container>
      </Navbar> 
    </>
  )
}
export default NavbarComp;