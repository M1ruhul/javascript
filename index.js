// let con1 = '33';
// console.log(typeof con1); 
// let con2 = 45;
// con1 = parseFloat(con1);
// console.log(typeof con1);
// let mot = con1 + con2;
// console.log(mot);
// let num1 = '44.2376'
// let num2 = 34.24;
// num1 = parseFloat(num1)
// total = num1 + num2;
// console.log(total);
// let num1 = 88;
// let num2 = 40;
// let total = num1 % num2;
// console.log(total);
// let sum = -43;
// let sum2 = 46;
// let newvalue = Math.abs(sum);
// console.log(newvalue);
// let a = 1;
// let b = 0;
// if(1>0){
// console.log('ami programming er boss hobe'); 
// }
// if(1<0){
//     console.log('ana marijun khatimun')
// }

// if(1<0){
// console.log('ami programming er boss hobe'); 
// }
// else {
//     console.log('ana marijun khatimun')
// }
// vul ase kisu
// if(1=0){
// console.log('ami tumake vlobashi');
// }
// else if(1<0){
// console.log('tumi amake vlobasho');
// }
// else{
//     console.log('doesn0t match')
// }
// let fdName = 'shuv0';
// switch (fdName) {
//     case 'mehedi':
//     console.log('ekhono halay Dohar');
//         break;
//     case 'nesar':
//         console.log('upwork niye busy');

//     default:
//         console.log('amar log in code astese na and asbeo na');
//         break;
// }




// let nowDate = new Date();
// console.log(nowDate.toDateString());

// let nowTime = new Date();
// console.log(nowTime.toLocaleTimeString());

// let fdName = ["monir" , "nesar" , "mehedi" , "Ruhul"]
// // console.log(fdName[3]);
// fdName[0] = 'new name';
// console.log(fdName);
// let fdName = ["monir" , "nesar" , "mehedi" , "Ruhul"]
// fdName.push(3245);
// console.log(fdName);
// fdName.pop();
// console.log(fdName);
// fdName.unshift(61);
// console.log(fdName);
// fdName.shift();
// console.log(fdName);

// let fdName = ['ruhul','monir', 'shuvo', 'mehedi'];
// console.log(fdName);

// console.log(fdName.slice(1,3));

// fdName.splice(1,3 , "ami tumake valobashi");
// console.log(fdName);
// let herName = 'Anika';
// switch(herName) {
// case 'Anika' :
//     console.log('Amader coronar somoy 5 minutes er modde friendship hoy');
//     // break;
//     case 'Anika' :
//         console.log('last year birthday o amar jonno B&H niye eshesilon sathe or bf ke o niye eshesilo');
//         // break;
//     case 'Anika' :
//         console.log('ora court marriage korar decission ney and amake sakkhi hisebe thakte bole ami oidin jainai');
//         // break;
//         case 'Anika' :
//             console.log('ore niye cha khaite jai and oi somoy or ammu and fiance call dey oidin je amar sathe asbe egulo agei bolesilo');
// // break;
//             default : 
//             console.log('oder shooping korlo sedin amake jodio jete bolesilo');
            

// }
// for(let num = 1; num<10; num++){
//     console.log(num);
// }
// let nums = [0,1,2,3,4,5,6,7,8,9, 'ruhul', 'nai'];
// for(let i = 0; i <nums.length ; i ++ ){
//     console.log(nums[i])
// }
// let i = 0;
// while(i<=10){
//     console.log(i);
//     i++
// }
// function fun(num1, num2){
//     let total = num1 + num2;

// console.log(total);
// }
// fun(20,10);
// fun(10, 15);
// function fun(num1){
//     let total = num1 * 10;
//     return total;
// }
// let a = fun(5);
// let b = fun(10)
// console.log(a + b);

// function namota(num1, num2){
//     let total = num1 * num2;
//     console.log(total);
// }
// namota(2, 1);
// namota(2, 2);
// namota(2, 3);
// namota(2, 4);
// namota(2, 5);
// namota(2, 6);
// namota(2, 7);
// namota(2, 8);
// namota(2, 9);
// namota(2, 10);

// let myInfo = {YourName:'write your name', Village: 'Name your area', Phone: 'type your number'}
// let yourInfo = {YourName:'write your name', Village: 'Name your area', Phone: 'type your number'}
// let herInfo = {YourName:'write your name', Village: 'Name your area', Phone: 'type your number'}
// console.log(myInfo);
// console.log(myInfo.Phone);
// function HerInfo(YourName, Village, Phone){
//     this.YourName = YourName;
//     this.Village = Village;
//     this.Phone = Phone;
//     this.OwnName = function(){
//         console.log(this.YourName);
//         console.log(this.Village);
//         console.log(this.Phone);
//     }

// }
// let NewObj = new HerInfo('Samina', 'Patia', 352421);
// let NewOobj = new HerInfo('Rikta', 'Lesbon', '0132902');
// let NewOobj1 = new HerInfo('Rikta', 'Lesbon', '0132902');
// let NewOobj2 = new HerInfo('Rikta', 'Lesbon', '0132902');
// // let Finalobj = new HerInfo('Samina', 'Patia', 0182902);
// // let Finalobj = new HerInfo('Samina', 'Patia', 0182902);
// NewObj.OwnName();
// NewOobj.OwnName();
// NewOobj1.OwnName();
// NewOobj2.OwnName();



// let a = 1;
// if(a=0){
//     console.log('what your fucking thinking about programming?')
// }
// else {
//     console.log('error')
// }

let TernayOp = true;
let Oput = (TernayOp = false) ? 'it will be true' : 'error';
console.log(Oput);