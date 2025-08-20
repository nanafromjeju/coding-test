function solution(order) {
    let count = 0;
    let str = order.toString();
    
    for (let digit of str) {
        if (digit === '3' || digit === '6' || digit === '9') {
            count++;
        }
    }
    
    return count;
}