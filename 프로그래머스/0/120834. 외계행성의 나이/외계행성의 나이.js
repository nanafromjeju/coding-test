
function solution(age) {
    return age.toString()
              .split('')
              .map(digit => String.fromCharCode(97 + parseInt(digit)))
              .join('');
}