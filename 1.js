
var foo = "555";
//alert(foo)
var myNum = Number(foo);
if( isNaN(myNum)){
	alert("it is not a number");
}


var str1 = "123";
var str2 = "234";
var a = 13;
var _str1 = str1 + str2;
console.log(_str1);
 _str1 = Number(str1)+ str2;
console.log(_str1);
 _str1 = str1 - str2;
console.log(_str1);
 _str1 = Number(str1) - str2;
console.log(_str1);
 _str1 = str1 * str2;
console.log(_str1);
 _str1 = Number(str1) * str2;
console.log(_str1);
_str1 = str1*2;
console.log(_str1);
_str1 = str1 * a;
console.log(_str1);
if(isNaN(str1)){
	alert("it is a not number");
}




/* third program

	for (var i = 0; i < 10; i++) {
		document.write("\n"+i)
	}

*/

/* second program

var amount = 0;
var i=1;
while (i<=10){
	amount = amount + 100 ;
	i++;
}
alert(amount);
document.write(amount+'\n');

*/


/* 

first program
var a=1;
while (a < 10) {
	alert(a);
	console.log("hi-"+a)
	a++
}*/