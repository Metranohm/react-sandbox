import React, { useState } from 'react';
import Mover from './Mover';

const Shaker = () => {
  const [data, setData] = useState(null);

  const handleMove = (movedData) => {
    // Do something with the moved data, such as updating state
    setData(movedData);
  };

  return (
    <div>
      {data && <p>{data}</p>}
      <Mover data="Some data" onMove={handleMove} />
    </div>
  );
};

export default Shaker;