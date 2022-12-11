import React from 'react';

const Mover = ({ data, onMove }) => {
  const handleClick = () => {
    // Call the onMove callback with the data as the argument
    onMove(data);
  };

  return (
    <button onClick={handleClick}>Move Data</button>
  );
};

export default Mover;