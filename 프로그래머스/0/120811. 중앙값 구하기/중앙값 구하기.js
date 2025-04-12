function solution(array) {
    
    // 오름차순으로 정렬
    array.sort((a, b) => a - b)
    
    // 중앙인덱스값
    const middleIndex = Math.floor(array.length / 2)
    
    return array[middleIndex];
}