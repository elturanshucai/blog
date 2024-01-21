import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./pages/home/Home"
import ArticleDetail from './pages/articleDetail/ArticleDetail';
import Register from './pages/register/Register';
import { Toaster } from 'react-hot-toast';
import LoginPage from './pages/login/LoginPage';

function App() {

  return (
    <div className='font-opensans'>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/blog/:id" element={<ArticleDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  )
}

export default App;