class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    nextPermutation(nums: number[]): void {
        let i = nums.length - 2;
        while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;
        }
        if (i >= 0) {
            let j = nums.length - 1;
            while (nums[j] <= nums[i]) {
                j--;
            }
            this.swap(nums, i, j);
        }
        this.reverse(nums, i + 1, nums.length - 1);
    }
    private swap(nums: number[], i: number, j: number): void {
        let temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
    }
    private reverse(nums: number[], left: number, right: number) {
        while (left < right) {
            this.swap(nums, left, right);
            left++;
            right--;
        }
    }
}
