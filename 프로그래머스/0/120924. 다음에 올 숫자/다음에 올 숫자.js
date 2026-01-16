
function solution(common) {
    const diff = common[1] - common[0];
    
    let isArithmetic = true;
    for (let i = 2; i < common.length; i++) {
        if (common[i] - common[i-1] !== diff) {
            isArithmetic = false;
            break;
        }
    }
    
    if (isArithmetic) {
        return common[common.length - 1] + diff;
    } else {
        const ratio = common[1] / common[0];
        return common[common.length - 1] * ratio;
    }
}
