import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Pages/MainPage'
import CartPage from './Pages/CartPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/mainPage' element={<MainPage/>}/>
          <Route path='/cart' element={<CartPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
