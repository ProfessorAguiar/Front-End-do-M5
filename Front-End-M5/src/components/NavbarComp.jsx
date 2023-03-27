import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginFormModal from './LoginFormModal';
import CadastroFormModal from './CadastroFormModal copy';
function NavbarComp() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src='https://dvwdemalggrkw.cloudfront.net/portais/senacrj/logos/logoCW.png' width={120}/>React-M5</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Usuarios</Nav.Link>
            <Nav.Link href="#pricing">Aulas</Nav.Link>
          </Nav>
          <LoginFormModal/>
          <CadastroFormModal/>
        </Container>
      </Navbar> 
    </>
  )
}
export default NavbarComp;