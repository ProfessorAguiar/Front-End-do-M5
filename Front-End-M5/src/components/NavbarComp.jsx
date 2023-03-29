import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginFormModal from './LoginFormModal';
import CadastroFormModal from './CadastroFormModal copy';
import { Outlet, Link } from "react-router-dom";
import './NavBarComp.css'
function NavbarComp() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home"><img src='https://dvwdemalggrkw.cloudfront.net/portais/senacrj/logos/logoCW.png' width={120}/>React-M5</Navbar.Brand>
          <Nav className="me-auto menu">
            <Link to={`/`} className="menu">Home</Link>
            <Link to={`usuarios/`} className="menu">Usuarios</Link>
            <Link to={`aulas/`} className="menu">Aulas</Link>
          </Nav>
          <LoginFormModal/>
          <CadastroFormModal/>
        </Container>
      </Navbar> 
    </>
  )
}
export default NavbarComp;