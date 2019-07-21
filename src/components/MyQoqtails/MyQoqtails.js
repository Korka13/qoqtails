import React from 'react';

import Qoqtail from '../Qoqtail/Qoqtail'

import './MyQoqtails.css';

const MyQoqtails = ({ saveQoqtail, deleteQoqtail, user, onSelectChange }) => {
      return (
        <div className="MyQoqtails">
          {
            user.currentQoqtail && user.currentQoqtail.id
            ? <div>
              <select className="MyQoqtails-select" onChange={onSelectChange}>
                {
                  user.qoqtails.map(qoqtail => <option key={qoqtail.id} value={qoqtail.id}>{qoqtail.name}</option>)
                }
                </select>
                <Qoqtail 
                  qoqtail={user.currentQoqtail} 
                  user={user} 
                  deleteQoqtail={deleteQoqtail}
                  saveQoqtail={saveQoqtail}
                />
              </div>
            : <h2 className="MyQoqtails-error">You have no saves yet!</h2>
          }
        </div>
      );
  }

export default MyQoqtails;