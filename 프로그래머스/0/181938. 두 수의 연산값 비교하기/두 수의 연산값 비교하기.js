function solution(a, b) {
  // a ⊕ b 만들기
  const concat = Number(String(a) + String(b));
  
  // 2 * a * b 계산
  const multiply = 2 * a * b;
  
  // 비교 후 반환
  return concat >= multiply ? concat : multiply;
}
