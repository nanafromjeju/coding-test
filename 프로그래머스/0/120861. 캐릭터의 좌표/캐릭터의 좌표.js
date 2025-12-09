function solution(keyinput, board) {
    let x = 0;
    let y = 0;
    
    const maxX = Math.floor(board[0] / 2);
    const maxY = Math.floor(board[1] / 2);
    
    for (const key of keyinput) {
        let newX = x;
        let newY = y;
        
        if (key === 'left') newX = x - 1;
        else if (key === 'right') newX = x + 1;
        else if (key === 'up') newY = y + 1;
        else if (key === 'down') newY = y - 1;
        
        if (newX >= -maxX && newX <= maxX) x = newX;
        if (newY >= -maxY && newY <= maxY) y = newY;
    }
    
    return [x, y];
}