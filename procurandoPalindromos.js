let word = prompt('Digite uma palavra:')
let inverterword = ''

for (let index = word.length -1; index >=0; index -=1) {
  inverterword += word[index]
}
if (word === inverterword) {
  alert(word + ' palindromo');
} else {
  alert(word + ' não é palindromo');
}


// function verificaPalindrome(string) {
//   let reverse = ''
//   for (let index = string.length -1; index >=0; index -=1) {
// reverse += string[index]
//   }
//   if (reverse === string) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(verificaPalindrome('ana')); //true
// console.log(verificaPalindrome('bolota')); //false