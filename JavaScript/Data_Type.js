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
for(var i = 1; i <=100;i++){
    // code 
    console.log(i);

}
