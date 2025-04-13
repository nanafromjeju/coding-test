function solution(money) {
const americano = 5500

const cups = Math.floor(money / americano)

const change = money % americano

    return [cups, change];
}