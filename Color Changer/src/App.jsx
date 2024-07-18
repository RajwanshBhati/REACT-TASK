import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [matrix, setMatrix] = useState(Array(3).fill(Array(3).fill('white')));
  const [clickSequence, setClickSequence] = useState([]);

  const handleClick = (row, col) => {
    const newMatrix = matrix.map((matrixRow, r) =>
      matrixRow.map((color, c) => {
        if (r === row && c === col) {
          return 'green';
        }
        return color;
      })
    );
    setMatrix(newMatrix);

    const newClickSequence = [...clickSequence, { row, col }];
    setClickSequence(newClickSequence);

    if (row === 2 && col === 2) {
      setTimeout(() => {
        newClickSequence.forEach((click, index) => {
          setTimeout(() => {
            setMatrix(prevMatrix =>
              prevMatrix.map((matrixRow, r) =>
                matrixRow.map((color, c) => {
                  if (r === click.row && c === click.col) {
                    return 'orange';
                  }
                  return color;
                })
              )
            );
          }, index * 500);
        });
      }, 500);
    }
  };

  return (
    <div className="matrix">
      {matrix.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((color, colIndex) => (
            <div
              key={colIndex}
              className="box"
              style={{ backgroundColor: color }}
              onClick={() => handleClick(rowIndex, colIndex)}
            ></div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default App;
