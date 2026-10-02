public class Solution {
    public string sortString(string a){
        char[] arrayA = a.ToCharArray();
        Array.Sort(arrayA);
        string sortedA = new string(arrayA);
        return sortedA;
    }

    public bool IsAnagram(string s, string t) {
        string sortedS = sortString(s);
        string sortedT = sortString(t);
        
        Console.WriteLine(sortedS + " and " + sortedT);
        
        return sortedS == sortedT;
    }
}
