function solution(my_string) {
    let sum = 0;
    
    for (let i = 0; i < my_string.length; i++) {
        if (my_string[i] >= '0' && my_string[i] <= '9') {
            sum += parseInt(my_string[i]);
        }
    }
    
    return sum;
}