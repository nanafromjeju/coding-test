function solution(polynomial) {
    let xCoeff = 0;  // x의 계수
    let constant = 0;  // 상수항
    
    // 공백을 기준으로 항을 분리
    const terms = polynomial.split(' + ');
    
    for (const term of terms) {
        if (term.includes('x')) {
            // x항 처리
            const coeff = term.replace('x', '');
            if (coeff === '') {
                // 'x'만 있는 경우 계수는 1
                xCoeff += 1;
            } else {
                // '3x' 같은 경우
                xCoeff += parseInt(coeff);
            }
        } else {
            // 상수항 처리
            constant += parseInt(term);
        }
    }
    
    // 결과 생성
    const result = [];
    
    if (xCoeff > 0) {
        if (xCoeff === 1) {
            result.push('x');
        } else {
            result.push(`${xCoeff}x`);
        }
    }
    
    if (constant > 0) {
        result.push(`${constant}`);
    }
    
    return result.join(' + ');
}