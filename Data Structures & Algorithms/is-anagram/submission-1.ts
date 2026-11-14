class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        let hashMap: Map<string,number> = new Map();
        const computeMap = (map: Map<string,number>, word: string): void =>{
            for(const i of word){
                if(map.has(i)){
                    let count = map.get(i);
                    count++
                    map.set(i,count)
                }
                else{
                    map.set(i,1)
                }
            }
        }
        computeMap(hashMap,s)
        for(const i of t){
            if(hashMap.has(i)){
                let count = hashMap.get(i)
                if(count<=0){
                    return false;
                }
                count--
                hashMap.set(i,count)
            }else{
                return false
            }
        }
        console.log(
           " HashMap: ", hashMap
        )
        for (const value of hashMap.values()){
            if(value>0){
                return false;
            }
        }
        return true;
    }
}
