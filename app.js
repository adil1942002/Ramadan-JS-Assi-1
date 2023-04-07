let num1 = +prompt("num1");
let num2 = +prompt("num2");

if(num1 > num2){
    console.log(num1);
}else if (num2 > num1){
    console.log(num2);
}



let num3 = prompt("- &&& + ");

if (num3 < -0){
    console.log("This sign is -");
}else{
    console.log("this sign is +");
}




let num4 = +prompt("num1");
let num5 = +prompt("num2");
let num6 = +prompt("num3");
let num7 = +prompt("num4");
let num8 = +prompt("num5");

if (num4 > num5 && num4 > num6 && num4 > num7 && num4 > num8){
console.log(num4);
}else if(num5 > num6 && num5 > num7 && num5 > num8){
    console.log(num5);
}else if (num6 > num7 && num6 > num8){
    console.log(num6);
}else if (num7 > num8){
    console.log(num7);
}else{
    console.log(num8);
}



for(let i = 0; i <= 15; i++){
    if (i % 2 == 0){
        console.log(i + " is even"); }
    else if(i % 2 !== 0){
        console.log(i + " is odd");
    }
}


let eng = +prompt("eng");
let urdu = +prompt("urdu");
let bio = +prompt("bio");
let math = +prompt("math");

if(eng >= 0 && eng <= 100){
    if(eng >=90){
        console.log(eng + " A++")
    }
    else if(eng >=80){
        console.log(eng + " A")
    }
    else if(eng >=70)
{
    console.log(eng + " B")
}
    else if(eng >=60)
{
    console.log(eng + " C")

}
    else if(eng >=50 || eng <= 0)
{
    console.log(eng + " D")

}
}
else{
    console.log("that is rong");
}

//===============================================================
if(urdu >= 0 && urdu <= 100){
    if(urdu >=90){
        console.log(urdu + " A++")
    }
    else if(urdu >=80){
        console.log(urdu + " A")
    }
    else if(urdu >=70)
{
    console.log(urdu + " B")
}
    else if(urdu >=60)
{
    console.log(urdu + " C")

}
    else if(urdu >=50 || urdu <= 0)
{
    console.log(urdu + " D")

}
}
else{
    console.log("that is rong");
}
// ==============================================

if(bio >= 0 && bio <= 100){
    if(bio >=90){
        console.log(bio + " A++")
    }
    else if(bio >=80){
        console.log(bio + " A")
    }
    else if(bio >=70)
{
    console.log(bio + " B")
}
    else if(bio >=60)
{
    console.log(bio + " C")

}
    else if(bio >=50 || bio <= 0)
{
    console.log(bio + " D")

}
}
else{
    console.log("that is rong");
}
// =========================================================


if(math >= 0 && math <= 100){
    if(math >=90){
        console.log(math + " A++")
    }
    else if(math >=80){
        console.log(math + " A")
    }
    else if(math >=70)
{
    console.log(math + " B")
}
    else if(math >=60)
{
    console.log(math + " C")

}
    else if(math >=50 || math <= 0)
{
    console.log(math + " D")
}
}
else{
    console.log("that is rong");
}



for (let i = 1; i <= 100; i++){
    
     if (i %  3 == 0 && i % 5 == 0 ){
        console.log("fizz buzz");
    }
    else if (i % 3  == 0){
    console.log("fizz")
}else if( i % 5 == 0){
    console.log("buzz");
}
else{
    console.log(i);
}
}



for (let i = 1;i <= 5; i++){
    for(let j = 1; j <= i; j++){
        document.write("* ");

    }
    document.write("<br>");
    
}