
function mergeAlternatively(s1, s2){
    let i = 0;
    let j = 0;
    let l1 = s1.length;
    let l2 = s2.length;
    let result = [];

    while(i < l1 && j < l2) {
        result.push(s1[i]);
        result.push(s2[j]);
        i++;
        j++;
    }

    while(i< l1) {
        result.push(s1[i]);
        i++;
    }
    while(j< l2) {
        result.push(s2[j]);
        j++;
    }
    return result.join('');
}

console.log(mergeAlternatively('abc', 'pqrst'))