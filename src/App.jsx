import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home"
import ArticleDetail from './pages/articleDetail/ArticleDetail';

function App() {

  return (
    <div className='font-opensans'>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route index path="/blog/:id" element={<ArticleDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;