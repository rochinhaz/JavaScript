let num = [5,8,4];
console.log(num);
num[3] = 6;
console.log(num);
num.push(7);
console.log(num);
let t=num.length;
console.log(t);
num.sort();
console.log(num);

/*
for(let i=0; i<num.length; i++){
    console.log(num[i]);
}
*/

for(let pos in num){
    console.log(num[pos])
}

/* num.indexOf(x) pesquisa o valor x dentro do vetor e retorna a posição */

let p = num.indexOf(8)
console.log('\n')
console.log(p)
let n = num.indexOf(3)
console.log(n)