import React from 'react'
import Cart from './Cart'
export default function MoviesList({ films }) {

    return (
        <div className="liste_movies">
         {
                films.map((elt,i) => <Cart key={i} movie={elt} />)}
        </div>
    )
}
