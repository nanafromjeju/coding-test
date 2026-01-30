function solution(babbling) {
    const sounds = ["aya", "ye", "woo", "ma"];
    let count = 0;
    
    for (let word of babbling) {
        let temp = word;
        let used = new Set(); // 이미 사용한 발음 추적
        let changed = true;
        
        // 더 이상 변화가 없을 때까지 반복
        while (changed && temp.length > 0) {
            changed = false;
            
            for (let sound of sounds) {
                // 아직 사용하지 않은 발음이고, 문자열 시작 부분에 있으면
                if (!used.has(sound) && temp.startsWith(sound)) {
                    temp = temp.slice(sound.length);
                    used.add(sound);
                    changed = true;
                    break;
                }
            }
        }
        
        // 모든 문자를 제거했으면 발음 가능
        if (temp === "") {
            count++;
        }
    }
    
    return count;
}