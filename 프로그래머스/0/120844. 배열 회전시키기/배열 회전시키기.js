function solution(numbers, direction) {
    if (direction === "right") {
        return [numbers[numbers.length - 1], ...numbers.slice(0, -1)];
    } else {
        return [...numbers.slice(1), numbers[0]];
    }
}
