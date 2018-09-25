import React from 'react';
import '../css/serieslist.css';
import { Link } from 'react-router-dom';

const SeriesListItem = ({series}) => (
   <li key={series.show.id}>
      <Link to={`/series/${series.show.id}`}>
      {series.show.name}
      </Link>
   </li>
)

const SeriesList = prop => (
      <div>
         <ul className='series-list'>
            {prop.list.map(series => (
               <SeriesListItem series = {series} />
            ))}
         </ul>
      </div>
   )

export default SeriesList;