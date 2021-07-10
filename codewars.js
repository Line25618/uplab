//Ссылка на codewars:
//https://www.codewars.com/users/Line25618/completed_solutions


//1_Multiply
//https://www.codewars.com/kata/50654ddff44f800200000004
function multiply(a, b){
  return a * b;
}

//2_Square(n) Sum
//https://www.codewars.com/kata/515e271a311df0350d00000f
function squareSum(numbers){
var nop=0;
  
  for(var i=0;i<numbers.length;i++){
    nop+=numbers[i]*numbers[i];
  }
  return nop;
}

//3_Greatest Common Factor of an Array
//https://www.codewars.com/kata/5849169a6512c5964000016e
function good(a, b)
{
    if (a == 0)
        return b;
    return good(b % a, a);
}
function greatestCommonFactor(array)
{
    let result = array[0];
    for (let i = 1; i < array.length; i++)
    {
        result = good(array[i], result);
 
        if(result == 1)
        {
        return 1;
        }
    }
    return result;
}

//4_Convert number to reversed array of digits
//https://www.codewars.com/kata/5583090cbe83f4fd8c000051
function digitize(n) {
    let masiv = [];
    let arr = n.toString().split('');
    let arrLength = arr.length;
    for (let i = 0; i < arrLength; i++) {
        let x = arr.pop();
        masiv.push(+x);
    }
    return masiv;
}

//5_Count by X
//https://www.codewars.com/kata/5513795bd3fafb56c200049e
function countBy(x, n) {
  var z = [];
  var j=1;
  var i=0;
  do {
  if((j%x)==0){
    z[i]=j;
    i++;
    }
  j++;
  } 
  while (i < n);
  return z;
}

//6_Quarter of the year
//https://www.codewars.com/kata/5ce9c1000bab0b001134f5af
const quarterOf = (month) => {
  var test=0;
  switch (month) {
  case 1:
  case 2:
  case 3:
    return(1);
    break;
  case 4:
  case 5:
  case 6:
    return(2);
    break;
  case 7:
  case 8:
  case 9:
    return(3);
    break;
  case 10:
  case 11:
  case 12:
    return(4);
    break;
  default:
    break;
}}

//7_It is written in the stars
//https://www.codewars.com/kata/5888a57cbf87c25c840000c6
function starSign(date) {
  var day=date.getDate();
  var mon=date.getMonth();mon++;
  if(mon==1){
    if(day<21){return('Capricorn');}
    else{return('Aquarius');}
    }
  if(mon==2){
    if(day<20){return('Aquarius');}
    else{return('Pisces');}
    }
  if(mon==3){
    if(day<21){return('Pisces');}
    else{return('Aries');}
    }
  if(mon==4){
    if(day<21){return('Aries');}
    else{return('Taurus');}
    }
  if(mon==5){
    if(day<22){return('Taurus');}
    else{return('Gemini');}
    }
  if(mon==6){
    if(day<22){return('Gemini');}
    else{return('Cancer');}
    }
  if(mon==7){
    if(day<23){return('Cancer');}
    else{return('Leo');}
    }
  if(mon==8){
    if(day<24){return('Leo');}
    else{return('Virgo');}
    }
  if(mon==9){
    if(day<24){return('Virgo');}
    else{return('Libra');}
    }
  if(mon==10){
    if(day<24){return('Libra');}
    else{return('Scorpio');}
    }
  if(mon==11){
    if(day<23){return('Scorpio');}
    else{return('Sagittarius');}
    }
  if(mon==12){
    if(day<22){return('Sagittarius');}
    else{return('Capricorn');}
    }
}

//8_What century is it?
//https://www.codewars.com/kata/52fb87703c1351ebd200081f
function whatCentury(year)
{
  var nop=0;
  if((year%100)!=0){
    nop=parseInt(year/100)+1;
  }
  else{nop=parseInt(year/100);}

if((nop!=11)&&(nop!=12)&&(nop!=13)){
  switch (nop%10) {
  case 1:
    return(nop+'st');
    break;
case 2:
    return(nop+'nd');
    break;
  case 3:
    return(nop+'rd');
    break;
case 0:
  case 4:
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
    return(nop+'th');
    break;
  default:
    break;
}}else{return(nop+'th');}
}

//9_Find Your Villain Name
//https://www.codewars.com/kata/536c00e21da4dc0a0700128b
function getVillainName(birthday){
  const m = ["Evil","Vile","Cruel","Trashy","Despicable","Embarrassing","Disreputable","Atrocious","Twirling","Orange","Terrifying","Awkward"];
  const d = ["Mustache","Pickle","Hood Ornament","Raisin","Recycling Bin","Potato","Tomato","House Cat","Teaspoon","Laundry Basket"];
  var nop='The ';
  var month=birthday.getMonth();
  var day=birthday.getDate();
  day=day%10;
  for(var i=0; i<m.length;i++){
    if(month==i){nop+=m[i];}
  }
  for(var i=0; i<d.length;i++){
    if(day==i){nop+=' '+d[i];}
  }
  return nop;
}

//10_Make A Window
//https://www.codewars.com/kata/59c03f175fb13337df00002e
function mad(str,num){
  var gif=str;
  for(var i=1;i<num;i++){
    str+=gif;
  }
  return str;
}
function makeAWindow(num) {
  var down='', nop='', row='';
  row=mad('.',num);
  down='\n|'+row+'|'+row+'|';
  row=mad(down,num);
  down='\n|'+mad('-',num)+'+'+mad('-',num)+'|';
  nop=mad('-',num*2+3)+row+down+row+'\n'+mad('-',num*2+3);
    return nop;
}

//11_Calculate Variance
//https://www.codewars.com/kata/5266fba01283974e720000fa
var variance = function(numbers) {
  var cp=0,nop=0;
  for(var i=0;i<numbers.length;i++){
    cp+=numbers[i];
  }
  cp/=numbers.length;
  for(var i=0;i<numbers.length;i++){
    nop+=(numbers[i]-cp)*(numbers[i]-cp);
  }
  nop/=numbers.length;
  return nop;
};

//12_Return Negative
//https://www.codewars.com/kata/55685cd7ad70877c23000102
function makeNegative(num) {
  if(num>0){num*=(-1);}
  return num;
} 

//13_Find the Squares
//https://www.codewars.com/kata/60908bc1d5811f0025474291
const findSquares = num => {
  var max=0;var min=0;
  for(var i=1;i<1000000;i++){
    min=i*i;max=(i+1)*(i+1);
    if(((Math.sqrt(min)%1)==0)&&((max-min)==num)&&((Math.sqrt(max)%1)==0)){break;}
  }
  return `${max}-${min}`;
};

//14_Multiples of 3 or 5
//https://www.codewars.com/kata/514b92a657cdc65150000006
function solution(number){
var nop = 0;
for (var i = 1; i < number; i++) {
if (i % 3 == 0 || i % 5 == 0) {
    nop += i;
  }
 }
 return nop;
}

//15_Heron's formula
//https://www.codewars.com/kata/57aa218e72292d98d500240f
function heron(a,b,c) {
  var s=(a + b + c) / 2;
  var form=Math.sqrt(s * (s - a) * (s - b) * (s - c));
  return form;
}

//16_Triangle area
//https://www.codewars.com/kata/59bd84b8a0640e7c49002398
function tArea(tStr) {
  var a=0,b=0,c=0;
  for(var i=0;i<tStr.length;i++){
    if(tStr[i]=='.'){a++;}
  }
  while(b!=a){c++;b+=c;}
  c--;
  return c*c/2;
}