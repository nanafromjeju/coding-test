function solution(sides) {
    const max = Math.max(...sides);
    const min = Math.min(...sides);
    return 2 * min - 1;
}