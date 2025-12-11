function solution(spell, dic) {
    const sortedSpell = spell.sort().join('');
    
    for (const word of dic) {
        const sortedWord = word.split('').sort().join('');
        if (sortedWord === sortedSpell) {
            return 1;
        }
    }
    
    return 2;
}