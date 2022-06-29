import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './pages/Home/Home';
import PostArticle from './pages/post-article/PostArticle';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/post-article' element={<PostArticle/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
