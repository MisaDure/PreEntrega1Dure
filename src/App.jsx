import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ItemListContainer from './Components/ItemListContainer';

function App() {


  return (
    <div style={{width: '100vw', height:' 100vh'}}>
      <NavBar/>
      <ItemListContainer greeting="Bienvenidos a mi pagina de aderezos"/>
    </div>

  )
}

export default App
