 // CHAPTER#05 STARTS

// Q#01
var num1=3;
var num2=5;
var result=num1+num2;
document.write("Sum of"," ",num1," ","and"," ",num2," ","is"," ",result);


// Q#02(Subtraction)
var num1=3;
var num2=5;
var result=num1-num2;
document.write("<br> Subtraction of"," ",num1," ","and"," ",num2," ","is"," ",result);

// Q#02(Multiplication)
var num1=3;
var num2=5;
var result=num1*num2;
document.write("<br> Multiplication of"," ",num1," ","and"," ",num2," ","is"," ",result);

// Q#02(Division)
var num1=3;
var num2=5;
var result=num1/num2;
document.write("<br>Division of"," ",num1," ","and"," ",num2," ","is"," ",result);

// Q#02(Modulus)
var num1=3;
var num2=5;
var result=num1%num2;
document.write("<br> Modulus of"," ",num1," ","and"," ",num2," ","is"," ",result);


// Q#03(a)
var number;
// Q#03(b)
document.write("<br> Value after variable declaration is:"," ",number);
// Q#03(c)
number=5;
// Q#03(d)
document.write("<br> Initial value:"," ",number);
// Q#03(e)
number=++number
// Q#03(f)
document.write("<br> Value after increment is:"," ",number);
// Q#03(g)
number=number+7;
// Q#03(h)
document.write("<br> Value after addition is:"," ",number);
// Q#03(i)
number=--number
// Q#03(j)
document.write("<br> Value after decrement is:"," ",number);
// Q#03(k)
document.write("<br> The reminder is:"," ",number%3);


// Q#04
var initialPrice="600"
var num=5
document.write("<br> Total cost to buy"," ",num," ","tickets to a movie is"," ",initialPrice*num,"PKR")


// Q#05
var num1=4
var num2=1
var num3=2
var num4=3
var num5=4
var num6=5
var num7=6
var num8=7
var num9=8
var num10=9
var num11=10
document.write("<br>","<h1>Table of 4</h1>")
document.write(       num1," ","x1=",num1*num2)
document.write("<br>",num1," ","x2=",num1*num3)
document.write("<br>",num1," ","x3=",num1*num4)
document.write("<br>",num1," ","x4=",num1*num5)
document.write("<br>",num1," ","x5=",num1*num6)
document.write("<br>",num1," ","x6=",num1*num7)
document.write("<br>",num1," ","x7=",num1*num8)
document.write("<br>",num1," ","x8=",num1*num9)
document.write("<br>",num1," ","x9=",num1*num10)
document.write("<br>",num1," ","x10=",num1*num11)


// Q#06
var chem1=25
var chem2=77
var chem3=70
document.write("<br>",chem1,"<sup>o</sup>C is"," ",chem2,"<sup>o</sup>F")
document.write("<br>",chem3,"<sup>o</sup>F is"," ",21.1111111111,"<sup>o</sup>C")


// Q#07

var item1=650
var quantity=3
var price=100
var quantity2=7
var charges=100
document.write("<h1>Shopping Cart</h1>")
document.write("<br> Price of item 1 is"," ",item1)
document.write("<br> Quantity of item 1 is"," ",quantity)
document.write("<br> Price of item 2 is"," ",price)
document.write("<br> Quantity of item 2 is"," ",quantity2)
document.write("<br> Shipping Charges"," ",charges)
document.write("<br>")
document.write("<br> Total cost of your order is",item1*quantity+price*quantity2+charges)


// Q#08
var totalMarks=550
var markObtained=455
document.write("<h1>Mark Sheet</h1>")
document.write("<br> Total marks:",totalMarks)
document.write("<br> Marks obtained:",markObtained)
document.write("<br> Percentage:",markObtained/totalMarks*100)


// Q#09
var dollar=10
var riyal=25
var rupee1=104.80
var rupee2=28
document.write("<h1>Currency in PKR</h1>")
document.write("Total currency in PKR:",dollar*rupee1+riyal*rupee2)


// Q#10
var num1=5

document.write(" <h1>Q#10</h1>")
document.write(num1+5*10/2)


// Q#11

var currentYear=2024
var birthYear=2007
document.write("<h1>Age Calculator</h1>")
document.write("<br> Current Year:"," ",currentYear)
document.write("<br> Birth Year"," ",birthYear)
document.write("<br> Your age is:"," ",currentYear-birthYear)


// Q#12(a)
var radius=20
document.write("<h1>The Geometrizer</h1>")
// Q#12(b)
document.write("Radius of circle:"," ",radius)
document.write("<br> The circumference is:",2*3.142*20)
document.write("<br> The area is:",3.142*20*20)


// Q#13
var favSnack="lays"
var age=15
var maxAge=65
var amount=3
document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<br> Current age:",age);
document.write("<br> Estimate Maximum Age:",maxAge);
document.write("<br> Amount of snacks per day:",amount);
document.write("<br> You will need 150 to last you until the ripe old age of",maxAge)


// CHAPTER#05 ENDS


// CHAPTER#06-09 STARTS

// Q#01
var num=10
document.write("<br>")
document.write("<br>The value of a is:"," ", num)

document.write("<br>....................")

num=++num;
document.write("<br> The value of ++a is"," ",num)
document.write("<br> Now the value of a is"," ",num)

document.write("<br>")
num1=num++;
document.write("<br> The value of  a++ is"," ",num1);
document.write("<br> Now the value of a++ is"," ",num);

document.write("<br>")
num1=--num;
document.write("<br> The value of --a is"," ",num1)
document.write("<br> Now the value of --a is"," ",num)

document.write("<br>")
num1=num--
document.write("<br> The value of a-- is"," ",num1)
document.write("<br> Now the value of a-- is"," ",num)


// Q#02
document.write("<br>")
var a=2,b= 1;
// var result= --a - --b + ++b + b--;
// var sol1= 1;
// var sol= --a - --b;
// var sol3= --a - --b + ++b;
// var sol4=--a - --b + ++b + b--;
document.write("<br> The value of --a is:"," ",--a);
document.write("<br> The value of --a - --b is:"," ",--a - --b);
document.write("<br> The value of --a - --b + ++b is:"," ",--a - --b + ++b);
document.write("<br> The value of --a - --b + ++b + b-- is:"," ",--a - --b + ++b + b--);
document.write("<br> The result is:",result);

// Q#03
 var question = "Your FullName?";
 var defaultAnswer = "John Doe";
 var spec = prompt(question, defaultAnswer);
 console.log(spec)

// Q#04

// Q#05
document.write("<br>")
 var num1 = prompt("Provide any number");
 var num2 = prompt("PRovide Another number");
 var result = num1*num2;
 document.write(result);


//  Q#06
var name1st= prompt("Subjects Name:");
var name2nd= prompt("Subjects Name:");
var name3rd= prompt("Subjects Name:");

var totalMarks= prompt( "Total numbers:", 100);

var markObtained=prompt ( "markObtained:", 70)
var markObtained1=prompt( "markObtained:", 60)
var markObtained2=prompt( "markObtained:", 50)