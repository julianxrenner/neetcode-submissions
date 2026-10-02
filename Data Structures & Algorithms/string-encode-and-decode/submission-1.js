class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let newStr = ''
        for(let str in strs){
            newStr = newStr + strs[str].length + '#' + strs[str]
        }
        console.log(newStr)
        return(newStr)
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        //loop chars
        //store numbers
        //hit hash, convert numbers to Number
        //build string
        //push string
        let count = ''
        let string = ''
        const arr = []
        for(let i = 0; i < str.length; i++){
            console.log(str[i])
            if(str[i]==='#'){
                count = Number(count)
                for(let j = i+1; j < count+i+1; j++){
                    string = string + str[j]
                    console.log(string)
                }
                arr.push(string)
                i = i+count
                string =''
                count = ''
                continue
            }
            count = count + str[i]
        }
        return(arr)
        }
    }
