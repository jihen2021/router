import React, { useState } from 'react'
import MoviesList from './Component/MoviesList';
import { Data } from './Data';
import AddMovies from './Component/AddMovies';
import Search from './Component/Search';
import './App.css';

import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import MovieDetails from './Component/MovieDetails';

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
      <Router>
        <Link to="/add">Ajouter un films</Link>
        <Switch>
          <Route path="/" exact

            render={(props) =>
              <MoviesList  {...props}
                films={movie.filter((i) => { return i.title.toLowerCase().match(search.toLowerCase().trim()) && i.rating >= searrate; })} />

            } />

          <Route path="/add" render={(props) => <AddMovies {...props} HandlAdd={HandlAdd} />} />
          <Route exact path="/moviedetails/:id" render={(props) => <MovieDetails {...props} movies={movie}/>}/> 

        </Switch></Router>

    </div>
  )
}
export default App