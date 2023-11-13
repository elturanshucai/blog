import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/Home"

function App() {

  return (
    <div className='font-opensans'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;