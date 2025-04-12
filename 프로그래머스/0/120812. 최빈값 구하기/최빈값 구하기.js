function solution(array) {
    const counts = {};
    
    for (const num of array) {
        counts[num] = (counts[num] || 0) + 1;
    }
    
    let maxCount = 0;
    let maxNum = -1;
    
    for (const num in counts) {
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            maxNum = parseInt(num);
        }
    }
    
    let isManyModes = false;
    
    for (const num in counts) {
        if (counts[num] === maxCount && parseInt(num) !== maxNum) {
            isManyModes = true;
            break;
        }
    }
    
    return isManyModes ? -1 : maxNum;
}