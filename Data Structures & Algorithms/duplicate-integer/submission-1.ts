class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        const seen= new Map();
        for(let i=0;i<nums.length;i++){
            const count = seen.get(nums[i])
            if(count){
                return true
            }
            seen.set(nums[i],count??0+1)
        }
        return false;
    }
}
