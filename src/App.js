
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './component/header/Header';
import Home from './component/home/Home';
import MovieList from './component/movieList/MovieList';
import MovieDetails from './component/movieDetails/MovieDetails';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<MovieDetails />} />
        <Route path="movies/:type" element={<MovieList />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

function NoPage() {
  return (
    <div>
      <h1>ERROR PAGE</h1>
    </div>
  )
}

export default App;
