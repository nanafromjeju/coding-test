function solution(num_list) {
    let oddString = "";   
    let evenString = "";  
    
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 !== 0) {  
            oddString += num_list[i];  
        } else {
            evenString += num_list[i]; 
        }
    }
    
    let oddNum = Number(oddString);   
    let evenNum = Number(evenString);
    
    return oddNum + evenNum; 
}