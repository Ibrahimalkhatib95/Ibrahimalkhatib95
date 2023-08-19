function isPalindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }
   console.log(isPalindrome('A man, a plan, a canal, Panama!'));
   console.log(isPalindrome('Race car')); 
   console.log(isPalindrome('Hello, world!')); 