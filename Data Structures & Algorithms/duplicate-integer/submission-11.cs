public class Solution {
    public bool hasDuplicate(int[] nums) {
        HashSet<int> mySet = new HashSet<int>();
        for(int i = 0; i < nums.Length; i++)
        {
            mySet.Add(nums[i]);
        }
        if(mySet.Count == nums.Length) {
            return false;
        }else{
            return true;
        }
    }
}