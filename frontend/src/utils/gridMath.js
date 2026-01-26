// Pure logic: Calculates X/Y coordinates for grid items
export const calculateGridPositions = (shape, size) => {
  const boxSize = 40;
  const positions = [];

  if (shape === 'square') {
    for (let i = 0; i < size * size; i++) {
      const row = Math.floor(i / size);
      const col = i % size;
      positions.push({ x: col * boxSize, y: row * boxSize, index: i });
    }
    return { positions, width: size * boxSize, height: size * boxSize };
  } 
  
  else if (shape === 'circle') {
    const diameter = size * boxSize;
    const radius = diameter / 2;
    const center = radius;
    let boxIndex = 0;

    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const posX = x * boxSize;
        const posY = y * boxSize;
        const distX = (posX + boxSize / 2) - center;
        const distY = (posY + boxSize / 2) - center;
        
        if (Math.sqrt(distX * distX + distY * distY) <= radius) {
          positions.push({ x: posX, y: posY, index: boxIndex++ });
        }
      }
    }
    return { positions, width: diameter, height: diameter };
  }

  else if (shape === 'triangle') {
    let boxCount = 0;
    for (let row = 0; row < size; row++) {
      const boxesInRow = row + 1;
      const rowOffset = (size - boxesInRow) * (boxSize / 2);
      for (let col = 0; col < boxesInRow; col++) {
        positions.push({ x: col * boxSize + rowOffset, y: row * boxSize, index: boxCount++ });
      }
    }
    return { positions, width: size * boxSize, height: size * boxSize };
  }
  
  return { positions: [], width: 0, height: 0 };
};