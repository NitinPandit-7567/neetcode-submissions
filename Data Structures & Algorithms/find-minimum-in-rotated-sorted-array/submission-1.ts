class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums: number[]): number {
        let low = 0;
        let high = nums.length - 1;
        let min = nums[0];
        while (low <= high) {
            let mid = low + Math.floor((high - low) / 2);
            console.log(
                "Low: ",
                nums[low],
                "MID ",
                nums[mid],
                " High: ",
                nums[high],
                ", Min: ",
                min,
            );
            min = Math.min(min, nums[low], nums[mid], nums[high]);
            console.log("MIN: ", min);
            if (nums[mid] < nums[low] && nums[mid] < nums[high]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        console.log("LOW: ", low, " High: ", high);
        return min;
    }
}
