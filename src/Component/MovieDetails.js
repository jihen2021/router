import React from 'react'

const MovieDetails = ({ elt }) => {
  return (
    <>
      {elt?
        <>
          <h1>Movie Details</h1>
          <p>Title: {elt.title}</p>
          <p>Title: {elt.image}</p>
          <p>Title: {elt.rating}</p>
         
         
        </>
        :
        <p>No movie found.</p>
      }
    </>
  )
}
export default MovieDetails