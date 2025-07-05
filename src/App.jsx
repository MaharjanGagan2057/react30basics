

import{BrowserRouter,Routes,Route} from 'react-router-dom'//this is for routing
import Home from './Home'//this is for routing home
import About from './About'//this is for routing about
import { Contact } from './Contact' //this is for routing contact
import Services from './services'
function App() {

  return (
    // This is the main App component that sets up the routes for the application
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route> 
      <Route path='/About' element={<About/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
      <Route path='/services' element={<Services/>}></Route>

    </Routes>
    </BrowserRouter>
  )
}

export default App
