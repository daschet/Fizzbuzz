// const a = 1940

// if(a >= 1945 ){
//     console.log("merdeka")
// } else if (a < 1945){
//     console.log("belum merdeka")
// } else{
//     console.log("mbuh")
// }

// 81 + excellent
//60 -80 gj
//50-59 remedial
//0-49 ga naik kelas

// const x = 99
// if(x > 81){
//     console.log("Excellent")
// } else if (x >59 && x<=80){
//     console.log ("Good job")
// } else if (x >49 && x <=59){
//     console.log("remedial")
// } else {
//     console.log("ga naik kelas")
// }

//fizzbuzz
//inside function fizz %3, buzz %5, fizzbuzz %3 && %5

//anagram, palindrome, binary tree, valid, sorting

function fizzbuzz(a){
    let lmao;
    if((a%3)===true && (a%5)===true) {
        console.log("fizzbuzz") 
    } else if ((a%3==0)===true && (a%5==0)===false) {
        console.log ("fizz")
    } else if ((a%3==0)===false && (a%5==0)===true) {
        console.log("buzz")
    } else {
        console.log("nill")
    }
}
    return console.log(fizzbuzz(5))