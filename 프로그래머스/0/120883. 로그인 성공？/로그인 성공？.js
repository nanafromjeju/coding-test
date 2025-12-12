function solution(id_pw, db) {
    const [inputId, inputPw] = id_pw;
    
    // db에서 아이디 찾기
    const foundUser = db.find(([id, pw]) => id === inputId);
    
    // 아이디가 없는 경우
    if (!foundUser) {
        return "fail";
    }
    
    // 아이디는 있지만 비밀번호가 다른 경우
    if (foundUser[1] !== inputPw) {
        return "wrong pw";
    }
    
    // 아이디와 비밀번호가 모두 일치하는 경우
    return "login";
}