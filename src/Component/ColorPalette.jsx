import React, { useState } from 'react';

const colors = [
  '#FF0000',
  '#00FF00',
  '#0000FF',
  '#FFFF00',
  '#FF00FF',
  '#00FFFF',
];

const ColorPalette = ({ onSelectColor }) => {
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    if (color === selectedColor) {
      setSelectedColor(null);
      onSelectColor(null);
    } else {
      setSelectedColor(color);
      onSelectColor(color);
    }
  };

  return (
    <div>
      <h2>Color Palette</h2>
      <div className="color-grid">
        {colors.map((color) => (
          <div
            key={color}
            className={`color-box ${color === selectedColor ? 'selected' : ''}`}
            style={{ backgroundColor: color }}
            onClick={() => handleColorClick(color)}
          ></div>
        ))}
      </div>

      <style jsx>{`
        .color-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 10px;
        }

        .color-box {
          width: 100px;
          height: 100px;
          border-radius: 4px;
          cursor: pointer;
        }

        .selected {
          border: 3px solid #000;
        }
      `}</style>
    </div>
  );
};

export default ColorPalette;
