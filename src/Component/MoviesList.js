import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Rating from './Rating';
function MoviesList({ films }) {
return (
        <div>
            {films.map((elt) =>
                <div >
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={elt.image} className="image" />
                        <Card.Body>
                        <Link to={`/moviedetails/${elt.id}`}> <Card.Title className="titre">{elt.title} </Card.Title></Link> 
                            <Rating rate={elt.rating} />
                        </Card.Body>
                    </Card>
                </div>)
            }

        </div>
    )
}

export default MoviesList