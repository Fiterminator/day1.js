console.log("Hello World");

// Declaring a variable, name and the value is Fitri
var name = "Fitri";
console.log(name);

//Show Hello + (variable) inside the console -> + here means combining two words -> Concatenation
console.log("Hello "+name);
var city = 'Kulim';
console.log(city)

var a = 15
var b = 2
var sum = a+b;
console.log(sum);
//minus -
//product *
//division /
//modulo % // the remainder of division operation

var minus = a-b
console.log(minus);
var product = a*b
console.log(product);
var division = a/b
console.log(division);
var modulo = a%b
console.log(modulo);


var hungry = true;
var sleepy = false;

// && , || , !

var longbreak = hungry && sleepy
console.log(longbreak);

var take5 = hungry || sleepy;
console.log(take5)

var reverseHungry = !hungry;
console.log(reverseHungry)

if (hungry == true){
  console.log("Let's have dinner");
}
else {
  console.log("Let's wait until class finish");
}

var age = 16;

if (age < 18 ){
  console.log("You cannot enter cinema")
}
else {
  console.log("You may enter cinema");
}

if (age < 13){
  console.log("You cannot watch the movie");
}
else if (age < 18){
  console.log("You can watch with parents");
}
else {
  console.log("You may watch the movie");
}

var number = 19;

if ( number % 2==0){
  console.log("This is an even number");
}
else {
  console.log("This is an odd number")
}

var price = 100;
var passengerAge = 17 ;

if (passengerAge < 19){
  var finalprice = price * 0.5
  console.log("The final price is RM"+finalprice)
}
else if (passengerAge < 41){
  console.log("The final price is RM"+price)
}
 else if (passengerAge < 66){
var finalprice = price * 0.75
console.log("The final price is RM"+finalprice)
 }
else {
var finalprice = price * 0.75
console.log("The final price is RM"+finalprice)
}


//dari ... until every ititreation add 1
for (var i = 0; i < 10; i ++){
  console.log(i);
}

// dari from 10, until 0 every ititeration remove by 1
for (var i = 10; i > 0; i --){
  console.log(i);
}

//from 1 until 10 every ititeration i will add by 2
for (var i = 1; i < 10 ; i+=2){
  console.log(i)
}

var multiplier = 7
var lines = 12

for (var i = 1; i < lines+1;  i ++){
  console.log(i+" x "+ multiplier + " = " + multiplier * i );
}