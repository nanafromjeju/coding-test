function solution(hp) {
    let count = 0;
    
    // 장군개미 사용 (공격력 5)
    count += Math.floor(hp / 5);
    hp %= 5;
    
    // 병정개미 사용 (공격력 3)
    count += Math.floor(hp / 3);
    hp %= 3;
    
    // 일개미 사용 (공격력 1)
    count += hp;
    
    return count;
}