function solution(array, n) {
    array.sort((a, b) => a - b);
    
    return array.reduce((closest, current) => {
        const closestDiff = Math.abs(closest - n);
        const currentDiff = Math.abs(current - n);
        
        return currentDiff < closestDiff ? current : closest;
    });
}