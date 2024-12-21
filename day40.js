function isPalindrome(s: string): boolean {
    // Convert to lowercase and remove all non-alphanumeric characters
     s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
     
     // Use two pointers to check if the string is a palindrome
     let left = 0, right = s.length - 1;
     
     while (left < right) {
         if (s[left] !== s[right]) {
             return false; // If characters at the pointers don't match, it's not a palindrome
         }
         left++;
         right--;
     }
     
     return true;
 };

 // https://leetcode.com/problems/valid-palindrome/submissions/1484538066/?envType=study-plan-v2&envId=top-interview-150