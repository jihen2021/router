import React, { useState } from 'react'

const MovieDetails = ({ match , movies }) => {
 
  

  const acte=movies.find(elt=>elt.id==match.params.id)
  
  return (<div >
    
    < h1>{acte.title}</h1> 
 
 </div>)

}

export default MovieDetails