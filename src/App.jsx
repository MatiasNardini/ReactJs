
import './App.css'
import Button from './components/Button'
import ItemlistContainer from './components/ItemListContainer'

import NavBar from './components/NavBar'

function App() {
 

  return (
    
      <div>
        <NavBar icono="https://cdn-icons-png.flaticon.com/512/107/107831.png"/>
        <h1>My App</h1>
        <ItemlistContainer greeting="Hello!"/>
       <Button texto="Hola" />
       <Button texto="Click"/>
       <Button texto="Aqui"/>
       
        

    
    </div> 
  )
}

export default App