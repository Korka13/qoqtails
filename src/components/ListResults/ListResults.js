import React from 'react';

import Qoqtail from '../Qoqtail/Qoqtail';

import './ListResults.css';

const ListResults = ({data, saveQoqtail, user, deleteQoqtail}) => {
  return (
    <div className="ListResults">
      {
        (data === null) 
        ? <h2 className="ListResults-error">Sorry, nothing found</h2>
        : data.map((cocktail, i) => 
          <Qoqtail 
            key={i} 
            qoqtail={cocktail} 
            saveQoqtail={saveQoqtail} 
            user={user} 
            deleteQoqtail={deleteQoqtail} 
            />)
      }
    </div>
  );
}

export default ListResults;