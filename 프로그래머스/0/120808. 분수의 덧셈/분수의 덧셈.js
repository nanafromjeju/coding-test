function solution(numer1, denom1, numer2, denom2) {
    const commonDenom = denom1 * denom2
    
    const newNumer1 = numer1 * denom2
    const newNumer2 = numer2 * denom1
    const sumNumer = newNumer1 + newNumer2
    
    const gcd = getGCD(sumNumer, commonDenom)
    return [sumNumer / gcd, commonDenom / gcd];
}

function getGCD(a, b) {
    return b === 0 ? a : getGCD(b, a % b)
}