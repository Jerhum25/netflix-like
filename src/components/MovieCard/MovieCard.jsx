import './MovieCard.scss';
import React from 'react';

function MovieCard({title, src}) {
   return (
      <div className='movieCardContainer'>
         <img src={src} alt={title} />
        <h4>{title}</h4>

      </div>
   );
}

export default MovieCard;