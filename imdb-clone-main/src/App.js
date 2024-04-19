import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/home/home';
import Movie from './pages/movieDetail/movie';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path='/' index element={<Home />}></Route>
                <Route path="movie/:id" element={<Movie />}></Route>
            </Routes>
        </Router>
    </div>
  );
}

export default App;
