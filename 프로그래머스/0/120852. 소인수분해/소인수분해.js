
function solution(n) {
    const result = [];
    let divisor = 2;
    
    while (n > 1) {
        if (n % divisor === 0) {
            if (!result.includes(divisor)) {
                result.push(divisor);
            }
            n /= divisor;
        } else {
            divisor++;
        }
    }
    
    return result;
}
