function solution(rsp) {
    let answer = '';
    
    for (let i = 0; i < rsp.length; i++) {
        if (rsp[i] === '2') {  // 가위를 이기려면 바위
            answer += '0';
        } else if (rsp[i] === '0') {  // 바위를 이기려면 보
            answer += '5';
        } else if (rsp[i] === '5') {  // 보를 이기려면 가위
            answer += '2';
        }
    }
    
    return answer;
}