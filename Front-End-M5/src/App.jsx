import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import CardComp from './components/CardComp';
import InserirTec from './components/InserirTec';
import { Outlet } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <Outlet />
    </div>
  )
}
export default App
