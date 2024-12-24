
import LabelBottomNavigation from "./components/Bottom";
import Navbar from "./components/Navbar";
import { Route, Routes, BrowserRouter as Router, Link } from 'react-router-dom'
import Trending from "./path/Trending";
import Movies from "./path/Movies";
import Tvseries from "./path/Tvseries";
import Search from "./path/Search";

function App() {
  return (
    <>
    <Router  >
    <Navbar/>
   
      <Routes>
        <Route path="/" element={<Trending/>}/>
        <Route path="/movies" element={<Movies/>}/>
        <Route path="/tvseries" element={<Tvseries/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
    
    
    



   




    <div >
    <LabelBottomNavigation/>

    </div>
   
  
    
    
    
    </Router>
    
    </>
  );
}

export default App;
