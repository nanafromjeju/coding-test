function solution(score) {
    const averages = score.map(([english, math]) => (english + math) / 2);
    
    const result = averages.map((avg, index) => {
        let rank = 1;
        for (let i = 0; i < averages.length; i++) {
            if (averages[i] > avg) {
                rank++;
            }
        }
        return rank;
    });
    
    return result;
}