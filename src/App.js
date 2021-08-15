import React, { useState } from 'react'
import MoviesList from './Component/MoviesList';
import { Data } from './Data';
import AddMovies from './Component/AddMovies';
import Search from './Component/Search';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  //initialiser les donnee a notre data
  const [movie, setMovie] = useState(Data)
  //ajout d'une card
  const HandlAdd = (newmovie) => {
    setMovie([...movie, newmovie])
  }
  const [search, setSearch] = useState("");

  //serch by rating
  const [searrate, setSearrate] = useState(0);
  const HandlRate = (newRate) => {
    setSearrate(newRate);
  }

  //call back function
  const HandlChange = (x) => {
    setSearch(x);

  }
  return (
    <div className="App">

     
     
      <Search HandlChange={HandlChange} search={search} rate={searrate} HandlRate={HandlRate} />
      <AddMovies HandlAdd={HandlAdd} />
      <Router>
      <Switch>
      <Route path="/" 
      render={() =>
      <MoviesList films={movie.filter((i) => { return i.title.toLowerCase().match(search.toLowerCase().trim()) && i.rating >= searrate; })} /> } />

      </Switch></Router>
      
     



      


    </div>
  )
}
export default App