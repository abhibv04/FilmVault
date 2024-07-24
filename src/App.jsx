import "./index.css";
import "./App.css";
import Movies from "./Components/Movies";
import Watchlist from "./Components/Watchlist";
import Navbar from "./Components/Navbar";
import Banner from "./Components/Banner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  let [watchlist, setWatchList]=useState([])
  let handleAddtoWatchlist=(movieObj)=>{
    let newwatchList=[...watchlist, movieObj]
    localStorage.setItem('moviesApp', JSON.stringify(newwatchList))
    setWatchList(newwatchList)
    console.log(newwatchList)
    
  }
  let handleremovefromWatchlist=(movieObj)=>{
    let filteredWatchlist=watchlist.filter((movie)=>{
      return movie.id!=movieObj.id
    })
    setWatchList(filteredWatchlist)
    localStorage.setItem('moviesApp', JSON.stringify(filteredWatchlist))
    
  }

  useEffect(()=>{
    let moviesFromLocalStorage= localStorage.getItem('moviesApp')
    if(!moviesFromLocalStorage){
      return 
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))
  }, [])



  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies watchlist={watchlist} handleAddtoWatchlist={handleAddtoWatchlist} handleremovefromWatchlist={handleremovefromWatchlist}/>
              </>
            }
          />
          <Route path="/watchlist" element={<Watchlist watchlist={watchlist} setWatchList={setWatchList} handleremovefromWatchlist={handleremovefromWatchlist}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
