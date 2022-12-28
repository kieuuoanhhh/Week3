var a = "Apple";
var b = "Website";
var c = 22;
var d = -1993;
var e = 22;
var f = "22";
var m = e + f;
var a1 = true;
var c1 = 6 > 10;
document.getElementById("demo1").innerHTML = a;
document.getElementById("demo2").innerHTML = b;
document.getElementById("demo3").innerHTML = c;
document.getElementById("demo4").innerHTML = d;
/* Nếu một số được đặt bên trong gặp dấu nháy kép hoặc cặp dấu
 nháy đơn thì nó sẽ bị chuyển sang kiểu dữ liệu string.*/
document.write(m);
document.getElementById("demo5").innerHTML = a1;
document.getElementById("demo6").innerHTML = c1;
document.write("<hr>")
/* Object*/
var SinhVien = {
    name: "Peter",
    gender: "Nam",
    year: 1993,
    getName:function(){
        return this.year;
    }
}
document.write("Gia tri thuoc tinh name : " + SinhVien.name);
document.write("<hr>");
console.log(SinhVien.gender);
console.log(SinhVien['year'])
console.log(SinhVien.getName());
/*Object constructor*/
function User(firstName,lastName,avatar)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.getName= function(){
        return `${this.firstName} ${this.lastName}`
    }
}
User.prototype.className =' F88';
User.prototype.getClassName = function (){
    return this.className;
}
var author = new User('Son',"Dang",'Avatar');
var user2 = new User('Tan',"ngoc",'avatar 2')
author.title =' Share F8'
console.log(author)
console.log(author.getName())
console.log(user2.getClassName())
/* Object Date*/
var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() +1;
var day = date.getDate();
console.log(date.toString())
console.log(`${day}/${month}/${year}`);
/*Math */
console.log(Math.PI);
console.log(Math.round(3.2))
console.log(Math.abs(-4))
console.log(Math.ceil(5.1));
console.log(Math.floor(6.9));

var random = Math.floor(Math.random() *10);
var bonus = [
    '10 coin',
    '20 coin',
    '40 coin',
    '35 coin'
]
console.log(bonus[random]);
console.log(Math.min(-100,1,90,50,40));
/*Undefined*/
var myName;
document.write(myName);
/*Array*/
var mobile = ["HTC", "Nokia", "SamSung"];
document.write(mobile[0] + "<hr>");
document.write(mobile[1] + "<hr>");
document.write(mobile[2] + "<hr>");
var languages = [
    'Java',
    'PHP',
    'Ruby',
   
]
var languages1 =[
    'popo',"lala"
]
console.log(Array.isArray({}))
console.log(languages.length)
console.log(languages[0])
console.log(languages)
console.log(languages.join('-'))
console.log(languages.pop())// delete element cuối mảng và trả về phần tử đã xóa
console.log(languages.push('Dart'))
console.log()
languages.splice(1,1,"linda","ki")
console.log(languages1.concat(languages))
console.log(languages)

/* Xác định kiểu : typeof */
var e = typeof false;
var f = typeof {
    name: "Nhân",
    gender: "Nam",
    year: 1993
};
document.write(e + "<hr>");
document.write(f + "<hr>");
/*VD*/
var age = 18;
var PI = 3.14;
var myString = age.toString();
console.log(typeof myString);
console.log(PI.toFixed())
/* If else*/
var date = 3;
if(date === 2){
    console.log('Hom nay la thu 2')

} else if(date === 3){
    console.log(' hom nay la thu 3')
}
else if(date === 4){
    console.log('hom nay la thu 4')
}
//switch
var date = 2;
switch(date){
    case 2:
        console.log('Hn la thu 2');
    break;
    case 3:
        console.log('hom nay la thu 3')
        break;
}
// Toan tu 3 ngoi */
var course = {
    name :'Javascript',
    coin : 250
}
// if (course.coin > 0){
//     console.log(`${course.coin} Coins `);
// }
// else {
//     console.log('Free')
// }
var result= course.coin > 0 ? `${course.coin} Coins`:'Free'
console.log(result)
/* Vong lap */
// For loop
for(var i = 1; i <=10;i++){
    // code 
    console.log(i);

}
console.log(1/0)
console.log(0/0)
let name = 'Lam'
console.log(`My name is ${name}`)
// Vòng lặp for loop
var myArray =[
    'Jsr',
    'php',
    'lop']
    console.log(myArray[0]);
    var arrayLength = myArray.length;
    for(var i=  0;i<arrayLength;i++)
    {
        console.log(myArray[i])
    }
    // For/in loop
    var my = {
        fiName : 'Kieu ',
        age:18,
        address:'HN'
    };
    for(var key in my){

    }
    var languages = 'javascr'
    for(var key in languages){
        console.log(languages[key])
    }
    // For/of loop
    for(var value of myArray){
        console.log(value)
    }
    console.log(Object.keys(my)) 
    for(var value of Object.keys(my)){
        console.log(value);
    }
    // while loop
    var i = 0;
    while(i<10){
        i++;
        console.log(i);
    }
    var array =[
        'javaa',
        'lop',
        'aaa'
    ]
    var i = 0;
    while(i<array.length){
        console.log(array[i])
        i++;
    }
    // do/while loop
    var i = 0
    do{
        // code
        i++;
        console.log(i);
    } while (i<10)
    // Break  & Continue in Loop
    for(var i = 0;i < 10;i++)
    {
        if(i%2 !== 0){
            continue;
        }
        console.log(i)
    }
    var nest =[
        [1, 2],
        [3, 4],
        [5, 6]
    ];
    for(var i = 0;i<nest.length;i++)
    {
        for(var j = 0;j<nest[i].length;j++){
            console.log(nest[i][j])
        }

    }
   //1. xac dinh diem stop
   //2. logic handle => 
   function countDown(num){
    if(num > 0){
        console.log(num);
        return countDown(num - 1);

    }
    return num;
   }
   countDown(3)
   /* mang */
   //Tao mang

   var languages = [
    'Java',
    'php',
    'fp',
    null,undefined
   ];
   console.log(languages[0])
   // function
   function writeLog(message,message2){
        console.log(message,message2)
   }
   writeLog('test','test1','tr')
   var cour =[
    {
        id : 1,
        name:'C',
        coin:10
    },
    {
        id:6,
        name:'D',
        coin:15
    },
   ];
function code(cour, index, originArray)
{
    return `<h2>${cour.name}</h2>` 
    // {
        // id:cour.id,
        // name :`Khoa hoc:${course.name}`,
        // coin:course.coin,
        // coinText: `Gia : ${course.coin}`,
        // index:index,
        // originArray:originArray,

   // }
    console.log(c)
}
   var newCourses = cour.map(code);
   console.log(newCourses)
   console.log(newCourses.join(''));

   // reduce
   // Bien luu tru
   var i = 0;
   function coinHandler(accumulator, currentValue,currentIndex,originArray)
   {
        i++;
        console.table({
            'Luot chay:' :i,
            'bien tich tru' : accumulator
        })
   }
   var totalCoin = cour.reduce(

   );
   // Lap qua cac ptu


   for(var course of cour){

   }