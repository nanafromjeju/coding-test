function solution(chicken) {
    let coupons = chicken;  // 처음 쿠폰 개수
    let service = 0;        // 서비스 치킨 개수
    
    while (coupons >= 10) {
        let newChicken = Math.floor(coupons / 10);  // 교환할 치킨 수
        service += newChicken;                       // 서비스 치킨 누적
        coupons = (coupons % 10) + newChicken;      // 남은 쿠폰 + 새로 받은 쿠폰
    }
    
    return service;
}