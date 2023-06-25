import './App.css';
import React, { useState } from 'react';
import ColorPalette from './Component/ColorPalette';

const App = () => {
  const [color, setcolor] = useState()
  const handleColorSelect = (color) => {
    console.log('Selected color:', color);
    setcolor(color)
  };


  return (
    <div className='center' >

      <b>Selected color:{color}</b>
      <ColorPalette onSelectColor={handleColorSelect} />
    </div>
  );
};

export default App;
