import Home from './pages/home/Home'
import Shop from './pages/shop/Shop'
import './reset.css'
import './vars.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="*" element={<Erro404 />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
