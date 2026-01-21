function solution(board) {
    const n = board.length;
    const dangerZone = new Set();
    
    const directions = [
        [-1, 0], [1, 0], [0, -1], [0, 1],
        [-1, -1], [-1, 1], [1, -1], [1, 1]
    ];
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 1) {
                dangerZone.add(`${i},${j}`);
                
                for (const [dx, dy] of directions) {
                    const nx = i + dx;
                    const ny = j + dy;
                    
                    if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
                        dangerZone.add(`${nx},${ny}`);
                    }
                }
            }
        }
    }
    
    return n * n - dangerZone.size;
}