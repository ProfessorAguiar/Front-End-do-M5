import reactLogo from './assets/react.svg'
// import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './components/NavbarComp';
import CardComp from './components/CardComp';
function App() {
  return (
    <div className="App">
      <NavbarComp/>
      <CardComp/>
    </div>
  )
}

export default App
