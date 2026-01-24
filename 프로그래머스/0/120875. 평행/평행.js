function solution(dots) {
    // 기울기를 계산하는 함수
    const getSlope = (dot1, dot2) => {
        return (dot2[1] - dot1[1]) / (dot2[0] - dot1[0]);
    };
    
    // 세 가지 경우로 두 쌍을 나눠서 확인
    // 경우 1: (0,1) & (2,3)
    if (getSlope(dots[0], dots[1]) === getSlope(dots[2], dots[3])) {
        return 1;
    }
    
    // 경우 2: (0,2) & (1,3)
    if (getSlope(dots[0], dots[2]) === getSlope(dots[1], dots[3])) {
        return 1;
    }
    
    // 경우 3: (0,3) & (1,2)
    if (getSlope(dots[0], dots[3]) === getSlope(dots[1], dots[2])) {
        return 1;
    }
    
    return 0;
}