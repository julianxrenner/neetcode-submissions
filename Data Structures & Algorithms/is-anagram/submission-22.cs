public class Solution {
    public static Dictionary<char, int> createDict(string a){
        var dict = new Dictionary<char, int>();
        for(int i = 0; i < a.Length; i++){
            char key = a[i];
            dict[key] = dict.ContainsKey(key) ? dict[key] + 1 : 1;
        }
        return dict;
    }

    public bool IsAnagram(string s, string t) {
        if (s.Length != t.Length) return false;
        Dictionary<char,int> dictionaryS = createDict(s);
        Dictionary<char,int> dictionaryT = createDict(t);
        return dictionaryS.OrderBy(kvp => kvp.Key)
            .SequenceEqual(dictionaryT.OrderBy(kvp => kvp.Key));
    }
}
