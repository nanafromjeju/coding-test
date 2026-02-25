function solution(num_list) {
let multiply = 1;
    let sum = 0;
    
    for (let i = 0; i < num_list.length; i++) {
        multiply *= num_list[i];
        sum += num_list[i]
    }
    
    let sumSquare = sum * sum;
    
    if (multiply < sumSquare) {
        return 1;
    } else {
        return 0
    }
}