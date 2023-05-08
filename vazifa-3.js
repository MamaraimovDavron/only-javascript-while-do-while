let n = parseInt(prompt("Son kiriting: "));
let min = 999999999;
let i = 1;

while(i <= n){
    if(i < min) min = i;
    i++;
}

console.log(min);
