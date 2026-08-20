class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
        let low = 0;
        let high = nums.length - 1;
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            if (nums[mid] === target) {
                return mid;
            } else if (nums[low] === target) {
                return low;
            } else if (nums[high] === target) {
                return high;
            } else if (
                (target > nums[mid] && target < nums[high]) ||
                (((target < nums[mid] && target < nums[high]) ||
                    (target > nums[mid] && target > nums[high])) &&
                    nums[high] - nums[mid] < 0)
            ) {
                // console.log(
                //     "[low++] Low: ",
                //     nums[low],
                //     ", Mid: ",
                //     nums[mid],
                //     ", High: ",
                //     nums[high],
                // );
                low = mid + 1;
            } else {
                // console.log(
                //     "[high--]Low: ",
                //     nums[low],
                //     ", Mid: ",
                //     nums[mid],
                //     ", High: ",
                //     nums[high],
                // );
                high = mid - 1;
            }
        }
        return -1;
    }
}
