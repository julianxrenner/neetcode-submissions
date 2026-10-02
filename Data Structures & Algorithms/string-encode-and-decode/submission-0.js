class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let str = ''
        for(let i = 0; i<strs.length; i++){
            str += '#'+`${strs[i].length}`+'#'+strs[i]
        }
        
        console.log(str)
        return str
    }

    /**.
     * 
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let strs = []
        for(let i = 0; i < str.length; i++){
            let currentString =''
            if(str[i]==='#'){
                let length = ''
                i++
                while(i < str.length && str[i] !== '#'){
                    length+=str[i]
                    i++
                }
                i++
                for (let j = 0; j < Number(length); j++) {
                    currentString += str[i];
                    i++;
                }
                strs.push(currentString)
                i--
            }
        }
        return strs
    }
}
