import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import CardComp from './components/CardComp';
import InserirTec from './components/InserirTec';
function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <InserirTec/>
      <CardComp/>
          
    </div>
  )
}
export default App
