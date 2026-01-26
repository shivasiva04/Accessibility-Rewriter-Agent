import { useState } from 'react';
import { toast } from 'react-hot-toast'; 
import { GRID_STYLES } from '../styles/gridStyles';
import { AUTH_TEXT } from '../constants/gridContent';

// Added 'isLoginMode' prop (defaults to false)
export default function GridPopup({ isOpen, gridSize, gridShape, onConfirm, isLoginMode = false }) {
  const [selectedCells, setSelectedCells] = useState([]);
  
  // Confirmation Logic State
  const [isConfirming, setIsConfirming] = useState(false);
  const [firstPattern, setFirstPattern] = useState([]);

  if (!isOpen) return null;

  // 1. Grid Logic
  const size = parseInt(gridSize) || 4;
  const isDense = size > 7; 
  
  // 2. CSS Selection
  const containerClass = isDense ? GRID_STYLES.GRID_CONTAINER_SM : GRID_STYLES.GRID_CONTAINER;
  const rowClass = isDense ? GRID_STYLES.GRID_ROW_SM : GRID_STYLES.GRID_ROW;
  const cellBaseClass = isDense ? GRID_STYLES.GRID_CELL_SM : GRID_STYLES.GRID_CELL;

  // Handle Click
  const toggleCell = (id) => {
    if (selectedCells.includes(id)) {
      setSelectedCells(selectedCells.filter(cellId => cellId !== id));
    } else {
      setSelectedCells([...selectedCells, id]);
    }
  };

  // Handle Button Click
  const handleAction = () => {
    // 1. Validate Length
    if (selectedCells.length < 3) {
      toast.error("Pattern too short! Select at least 3 cells.");
      return;
    }

    // --- CASE 1: LOGIN MODE (Single Step) ---
    if (isLoginMode) {
      // Submit immediately. No confirmation needed for login.
      onConfirm(selectedCells);
      return;
    }

    // --- CASE 2: SIGNUP MODE (Double Step / Confirmation) ---
    if (!isConfirming) {
      // Step A: Save first pattern & switch to confirm mode
      setFirstPattern(selectedCells);
      setSelectedCells([]); 
      setIsConfirming(true);
      toast("Pattern recorded. Re-enter to confirm.", { icon: '🔒' });
    } else {
      // Step B: Verify Match
      const isMatch = JSON.stringify(firstPattern) === JSON.stringify(selectedCells);
      
      if (isMatch) {
        onConfirm(selectedCells); 
      } else {
        toast.error("Pattern mismatch! Please start over.");
        setIsConfirming(false);
        setFirstPattern([]);
        setSelectedCells([]);
      }
    }
  };

  const renderCell = (id, index) => {
    const isSelected = selectedCells.includes(id);

    return (
      <div
        key={id}
        onClick={() => toggleCell(id)}
        className={`${cellBaseClass} ${isSelected ? GRID_STYLES.GRID_CELL_SELECTED : ''}`}
        style={{ animationDelay: `${index * (isDense ? 10 : 25)}ms` }} 
      />
    );
  };

  const renderGrid = () => {
    let rows = [];
    let globalIndex = 0;

    if (gridShape === 'square') {
      for (let i = 0; i < size; i++) {
        let cells = [];
        for (let j = 0; j < size; j++) {
          cells.push(renderCell(i * size + j, globalIndex++));
        }
        rows.push(<div key={i} className={rowClass}>{cells}</div>);
      }
    } else if (gridShape === 'triangle') {
      for (let i = 0; i < size; i++) {
        let cells = [];
        for (let j = 0; j <= i; j++) {
          cells.push(renderCell(`${i}-${j}`, globalIndex++));
        }
        rows.push(<div key={i} className={rowClass}>{cells}</div>);
      }
    } else {
      for (let i = 0; i < size * 2 - 1; i++) {
         const cols = i < size ? i + 1 : (size * 2 - 1) - i;
         let cells = [];
         for(let j=0; j<cols; j++) {
            cells.push(renderCell(`${i}-${j}`, globalIndex++));
         }
         rows.push(<div key={i} className={rowClass}>{cells}</div>);
      }
    }
    return <div className={containerClass}>{rows}</div>;
  };

  // Dynamic Button Text
  const getButtonText = () => {
    if (isLoginMode) return "Unlock"; // Text for Login
    if (isConfirming) return "Confirm Pattern";
    return "Continue";
  };

  return (
    <div className="w-full flex flex-col items-center">
      <h3 className={GRID_STYLES.GRID_TITLE}>
        {isLoginMode ? "Enter Password Pattern" : (isConfirming ? "Confirm Pattern" : AUTH_TEXT.GRID_TITLE)}
      </h3>
      
      <p className="text-gray-400 text-sm mb-4 text-center">
        {isLoginMode 
          ? "Draw your pattern to unlock."
          : (isConfirming ? "Re-enter the pattern to confirm." : "Select cells to create your pattern.")
        }
      </p>

      <div className="w-full flex justify-center p-2">
        {renderGrid()}
      </div>

      <div className="flex flex-col w-full gap-3 mt-6">
        <button onClick={handleAction} className={GRID_STYLES.BUTTON_PRIMARY}>
          {getButtonText()}
        </button>

        {/* Reset Button */}
        <button 
          onClick={() => {
            setIsConfirming(false);
            setFirstPattern([]);
            setSelectedCells([]);
          }}
          className="text-gray-400 text-sm hover:text-white transition-colors"
        >
          Reset
        </button>
      </div>
    </div>
  );
}