let namee= "vinay";
console.log(namee);
console.log("hwlo");

let selectedColors = ['red','green','blue'];

selectedColors[3]='pink';
console.log(selectedColors);

let person = { name : "vinay", age : 29};

console.log(person);



function eatme(e)
{
    console.log("hello   "+ e);

}
eatme(person.age);
eatme(person.name);