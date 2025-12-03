import {Box} from '@mui/material'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Explore from './pages/Explore'
const App = () => {
  return (
    <div className="">
      <Box>
        <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/explore' element ={<Explore/>}/>
          
        </Routes>
        
        </BrowserRouter>
        
      </Box>
      
    </div>
  )
}

export default App
