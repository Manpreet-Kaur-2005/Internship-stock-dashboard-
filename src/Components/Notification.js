// Notification.js
import React from 'react';

const Notification = ({ message, onClose }) => {
  return (
    <div className="fixed top-4 right-4 bg-green-500 text-white p-4 rounded-md shadow-lg">
      <p>{message}</p>
      <button onClick={onClose} className="ml-4 text-white underline">Close</button>
    </div>
  );
};

export default Notification;
