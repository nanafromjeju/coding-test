function solution(quiz) {
    const answer = [];
    
    for (const equation of quiz) {
        const parts = equation.split(' ');
        
        const X = parseInt(parts[0]);
        const operator = parts[1];
        const Y = parseInt(parts[2]);
        const Z = parseInt(parts[4]);
        
        let result;
        if (operator === '+') {
            result = X + Y;
        } else {
            result = X - Y;
        }
        
        if (result === Z) {
            answer.push("O");
        } else {
            answer.push("X");
        }
    }
    
    return answer;
}
