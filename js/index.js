// const msg = 'Hello world!';
// alert(msg);
// document.write(msg);
// document.write('tasting js');
// console.log(msg);

// const name = prompt('Enter your name');
// document.write('Hello'+name);




// let year = parseInt prompt('Enter your year of birth');
// let month =Number prompt('Enter your month of birth');
// let day =Number prompt('Enter you day of birth');
// document.write('br');
// document.write('Your magic number is'+year+month+day);*/

// // let year = Number(prompt('Enter your year of birth'));
// // let age = 2017 - year;
// // if(age<= 12){
// //     document.write('You are child');
// // }else if(age<= 30){
// //   document.write('You are young');    
// // }else if(age<= 50){
// //   document.write('Middle age');   
// // }else{
// //   document.write('Old');   
// // }

// // const year = parseInt(prompt('Year of birth'));
// // const age = 2017 - year;
// // let msg;

// // if (age <= 12) {
// //     msg = 'You are child';
// // } else if (age <= 30) {
// //     msg = 'You are young';
// // } else if (age <= 50) {
// //     msg = 'Middle age';
// // } else {
// //     msg = 'You are old';
// // }
// // document.write(msg);



// // for (let i = 1002; i <= 10000; i = i + 3) {
// //     document.write(i);
// //     document.write('<br>');
// // }

// // for (let i = 1000; i <= 10000; i++) {
// //     if (i % 3 === 0) {
// //         document.write(i);
// //         document.write('<br>');
// //     }
// // }

// print('1' == 1);
// print('1' === 1);

// function print(val) {
//     document.write(val);
//     document.write('<br>');
// }

// function sum(a, b) {
//     return a + b;
// }


// print(sum(1, 2));

// const a = parseFloat(prompt('Enter A'));
// const b = parseFloat(prompt('Enter B'));
// const c = parseFloat(prompt('Enter C'));

const a = Number(prompt('Enter a'));
const b = Number(prompt('Enter b'));
const c = Number(prompt('Enter c'));

function solveQuadr(a,b,c) {
    const d = (b*b)-(4*a*c);
    let x1,x2;
    if (d > 0) {
        x1 = (-b - Math.sqrt(d)) / (2 * a);
        x2 = (-b + Math.sqrt(d)) / (2 * a);
    }
    else if (d === 0) {
        x1 = -b / (2 * a);
    } else if(d < 0){
        x1 = 'can not calculate';
        x2 = 'can not calculate';
    }
    return 'x1 = ' + x1 + ', x2= ' + x2;
}
const solution = solveQuadr(a,b,c);
document.write(solution);

