import React, { useState, useEffect } from "react";
import "./PuzzleGame.css"; // Import the CSS for the puzzle game

const PuzzleGame = ({ imageSrc, gridSize = 4 }) => {
  // Increased default gridSize to 4
  const [pieces, setPieces] = useState([]);
  const [draggedPiece, setDraggedPiece] = useState(null);
  const [isSolved, setIsSolved] = useState(false); // State to track if the puzzle is solved

  // Shuffle the pieces
  const shuffleArray = (array) => {
    const newArray = [...array]; // Create a copy to avoid mutating the original
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]]; // Swap elements
    }
    return newArray;
  };

  // Initialize the puzzle pieces
  useEffect(() => {
    const createShuffledPieces = () => {
      const tempPieces = [];
      for (let row = 0; row < gridSize; row++) {
        for (let col = 0; col < gridSize; col++) {
          tempPieces.push({
            id: `${row}-${col}`,
            row: row, // Current row
            col: col, // Current column
            correctRow: row, // Original row
            correctCol: col, // Original column
          });
        }
      }
      return tempPieces;
    };

    let initialPieces = createShuffledPieces();
    initialPieces = shuffleArray(initialPieces);

    // Assign shuffled positions
    initialPieces = initialPieces.map((piece, index) => ({
      ...piece,
      row: Math.floor(index / gridSize),
      col: index % gridSize,
    }));

    setPieces(initialPieces);
  }, [gridSize]);

  // Handle drag start
  const handleDragStart = (piece) => {
    setDraggedPiece(piece);
  };

  // Handle drop
  const handleDrop = (targetPiece) => {
    if (!draggedPiece) return;

    const newPieces = pieces.map((piece) => {
      if (piece.id === draggedPiece.id) {
        return { ...piece, row: targetPiece.row, col: targetPiece.col };
      }
      if (piece.id === targetPiece.id) {
        return { ...piece, row: draggedPiece.row, col: draggedPiece.col };
      }
      return piece;
    });

    setPieces(newPieces);
    setDraggedPiece(null);
  };

  // Check if the puzzle is solved
  useEffect(() => {
    const solved = pieces.every(
      (piece) => piece.row === piece.correctRow && piece.col === piece.correctCol
    );
    setIsSolved(solved); // Update the isSolved state
  }, [pieces]);

  return (
    <div className="puzzle-container">
      {isSolved && <div className="solved-message">🎉 Solved Yayay! 🎉</div>}
      <div
        className="puzzle-grid"
        style={{
          gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
          gridTemplateRows: `repeat(${gridSize}, 1fr)`,
          width: `${gridSize * 100}px`, // Dynamic width based on gridSize
          height: `${gridSize * 100}px`, // Dynamic height based on gridSize
        }}
      >
        {pieces.map((piece) => (
          <div
            key={piece.id}
            className="puzzle-piece"
            style={{
              backgroundImage: `url(${imageSrc})`,
              backgroundPosition: `-${piece.correctCol * (100)}px -${
                piece.correctRow * (100)
              }px`,
              backgroundSize: `${gridSize * 100}px ${gridSize * 100}px`, // Dynamic backgroundSize
              gridColumn: piece.col + 1,
              gridRow: piece.row + 1,
            }}
            draggable
            onDragStart={() => handleDragStart(piece)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => handleDrop(piece)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PuzzleGame;