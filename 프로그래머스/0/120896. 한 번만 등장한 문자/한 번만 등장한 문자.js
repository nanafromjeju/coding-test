function solution(s) {
    const charCount = {};
    
    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    const result = Object.keys(charCount)
        .filter(char => charCount[char] === 1)
        .sort()
        .join('');
    
    return result;
}
