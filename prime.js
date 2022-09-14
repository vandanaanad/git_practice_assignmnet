//Check this number is prime or not
let num=17;
let count=0
for(let i=0;i<=num;i++){
    if(num%i==0){
        count++
    }
}
 if(count==2){
    console.log("it is prime",num)
 }else{
    console.log("it is not a prime",num)
 }

