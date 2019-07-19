import React from 'react';

import Qoqtail from '../Qoqtail/Qoqtail'

const MyQoqtails = ({ getQoqtail,saveQoqtail, deleteQoqtail, user }) => {
      return (
        <div className="MyQoqtails">
          {
            user.currentQoqtail && user.currentQoqtail.id
            ? <div>
                {
                  user.qoqtails.map(qoqtail => <button key={qoqtail.id} onClick={() => getQoqtail(qoqtail.id)}>{qoqtail.name}</button>)
                }
                <Qoqtail 
                  qoqtail={user.currentQoqtail} 
                  user={user} 
                  deleteQoqtail={deleteQoqtail}
                  saveQoqtail={saveQoqtail}
                />
              </div>
            : <h1>You have no saves yet!</h1>
          }
        </div>
      );
  }

export default MyQoqtails;