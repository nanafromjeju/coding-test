function solution(i, j, k) {
    let count = 0;
    
    for (let num = i; num <= j; num++) {
        const numStr = num.toString();
        const kStr = k.toString();
        
        for (let digit of numStr) {
            if (digit === kStr) {
                count++;
            }
        }
    }
    
    return count;
}
