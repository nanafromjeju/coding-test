function solution(lines) {
    // 이벤트 배열: [위치, 타입] (타입: 1=시작, -1=끝)
    const events = [];
    
    for (const [start, end] of lines) {
        events.push([start, 1]);   // 선분 시작
        events.push([end, -1]);     // 선분 끝
    }
    
    // 위치 기준 정렬, 같은 위치면 시작(1)을 먼저
    events.sort((a, b) => {
        if (a[0] !== b[0]) return a[0] - b[0];
        return b[1] - a[1]; // 시작점을 끝점보다 먼저 처리
    });
    
    let answer = 0;
    let count = 0;  // 현재 겹치는 선분의 개수
    let prevPos = events[0][0];
    
    for (const [pos, type] of events) {
        // 이전 구간에서 2개 이상 겹쳤다면 길이 추가
        if (count >= 2) {
            answer += pos - prevPos;
        }
        
        count += type;  // 선분 개수 업데이트
        prevPos = pos;
    }
    
    return answer;
}