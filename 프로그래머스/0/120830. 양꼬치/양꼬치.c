int solution(int n, int k) {
    
    int food_cost = n * 12000;
    
    int drink_cost = k * 2000;
    
    int free_drinks = n / 10;
    
    int total_cost = food_cost + drink_cost - (free_drinks * 2000);
        
    return total_cost;
}