//check  this string is palindrome or not
let str ="naman"
 let bag=""
 for(let i=str.length-1;i>=0;i--){
    bag=bag+str[i]
 }
  if(bag==str){
    console.log("it is palindrome":,str)
  }else{
    console.log("it is not a palindrome":,str)
  }