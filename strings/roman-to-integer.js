
function romanToInteger(s){
    // define the roman system in a map
    let m = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0;
    let i = 0;
    while(i < s.length - 1){
        let diff = 0;
        if(m[s[i+1]] > m[s[i]]) {
            diff = m[s[i+1]] - m[s[i]];
            result+=diff;
            i = i+2;
        }
        else{
            result+=m[s[i]];
            i++;
        }
    }
    return result;
}

console.log(romanToInteger('MCMXCIV'));