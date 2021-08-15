import React from 'react';
import { Card } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import MovieDetails from './MovieDetails';
import Rating from './Rating';

function MoviesList({films}) {
    
return (

 
<Switch>
<Route path="/films/:id" render={({ match }) => {
          const id = parseInt(match.params.id)
          const foundMovie = films.find(elt => elt.id === id)
          return <MovieDetails elt={foundMovie} />
        }} />


       
    <Route path="/films" 
        render={() => <div className="liste_movies">
               {
                films.map((elt) =>
                <div key={elt.id}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={elt.image} className="image" />
                    <Card.Body>
                      <Link to={`/films/${elt.id}`}>
                        <Card.Title className="titre">{elt.title} </Card.Title>
                        </Link> 
                    <Rating rate={elt.rating}/>
                    </Card.Body>
                </Card>
                </div>
                
                )}
                </div>}/>
   
       








     </Switch>
        )
    }

export default MoviesList