function solution(num_list) {
    const last = num_list[num_list.length - 1];  // 마지막 원소
    const prev = num_list[num_list.length - 2];  // 그전 원소
    
    if (last > prev) {
        num_list.push(last - prev);  // 차이값 추가
    } else {
        num_list.push(last * 2);     // 2배 값 추가
    }
    
    return num_list;
}