function solution(A, B) {
    if (A.length !== B.length) return -1;
    
    if (A === B) return 0;
    
    let current = A;
    for (let i = 1; i < A.length; i++) {
        current = current[current.length - 1] + current.slice(0, -1);
        
        if (current === B) {
            return i;
        }
    }
    
    return -1;
}