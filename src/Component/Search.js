
import React from 'react';
import Rating from './Rating';

const Search=({HandlChange,search, rate, HandlRate}) =>{
    

  
    return (
        <div>
             <h1>our movie app</h1>
             <div className="warpper">
             <div className="search_box">
            <input type="text"
              placeholder="search"
              className="input_search"
              onChange={(e) => {HandlChange(e.target.value); } }
               value={search} 
              />
              </div>
              <p><Rating  rate={rate} HandlRate={HandlRate} /></p>
              </div>
              
        </div>
    )
}
export default Search

