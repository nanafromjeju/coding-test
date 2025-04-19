function solution(n) {
    const nStr = n.toString()
    
    let total = 0
    for (let i = 0; i < nStr.length; i++) {
        total += parseInt(nStr[i])
    }
    return total;
}