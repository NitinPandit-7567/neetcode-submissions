class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let encodedString = "";
        strs.forEach((s) => {
            encodedString += s.length + "#" + s;
        });
        return encodedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let strs: string[] = [];
        let s = "";
        let l = "";
        let ns = null;
        let i = 0;
        let j = 0;
        while (i < str.length) {
            const isNum = !isNaN(Number(str[i]));
            if (ns===null) {
                if (isNum) {
                    l += str[i];
                    i++;
                } else if (str[i] === "#" && l.length) {
                    ns = Number(l);
                    i++;
                }
            } else {
                if(j<ns){
                    s+=str[i]
                    j++;
                    i++;
                }else{
                    strs.push(s)
                    s=""
                    ns=null;
                    j=0;
                    l="";
                }
            }
            
        }
        if(ns!==null){
            strs.push(s)
        }
        return strs;
    }
}
