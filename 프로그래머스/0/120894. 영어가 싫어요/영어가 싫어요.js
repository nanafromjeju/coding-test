function solution(numbers) {
    // 영어 숫자와 실제 숫자의 매핑
    const numMap = {
        'zero': '0',
        'one': '1',
        'two': '2',
        'three': '3',
        'four': '4',
        'five': '5',
        'six': '6',
        'seven': '7',
        'eight': '8',
        'nine': '9'
    };
    
    let result = numbers;
    for (let [word, digit] of Object.entries(numMap)) {
        result = result.replaceAll(word, digit);
    }
    
    return parseInt(result);
}