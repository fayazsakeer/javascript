let n = Number(prompt("Enter a Number"))
temp = n
rev = 0

while(n>0){
    rev=rev*10+n%10
    n= Math.floor(n/10)
}
if(temp==rev){
    console.log("Palindrom");
}
else{
    console.log("Not a Palindrom");
}