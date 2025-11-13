
function solution(s) {
    const arr = s.split(' ');
    const stack = [];
    
    for (const item of arr) {
        if (item === 'Z') {
            stack.pop(); 
        } else {
            stack.push(Number(item)); 
        }
    }
    
    return stack.reduce((sum, num) => sum + num, 0);
}