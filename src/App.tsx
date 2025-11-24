import {Box} from '@mui/material'
import Navbar from './components/Navbar'
import Home from './pages/Home'
const App = () => {
  return (
    <div className="">
      <Box>
        <Navbar/>
        <Home/>
      </Box>
      
    </div>
  )
}

export default App
