
function jewelsAndStones(jewels, stones){
    let count = 0;
    for (const s of stones){
        for(const j of jewels){
            if(s === j) {
                count++;
            }
        }
    }
    return count;
}

console.log(jewelsAndStones('aA', 'aAAbbbbb'));