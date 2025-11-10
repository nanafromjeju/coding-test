function solution(array) {
    let answer = 0; 
    for (let num of array) {
        
        const str = String(num);
        
        for (let char of str) {
            
            if (char === '7') {
                answer++;
            }
        }
    }
    
    return answer;
}