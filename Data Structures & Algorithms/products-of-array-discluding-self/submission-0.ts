class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
        let product=1;
        let i=0;
        let j=i+1;
        let result=[]
        while(i<nums.length){
            if(j>=nums.length){
                result.push(product)
                product=1;
                i++;
                j=0;
            }
            if(j!==i){
                product = product * nums[j]
            }
            j++
        }
        return result
    }
}
