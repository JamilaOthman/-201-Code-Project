
'use strict'
var score=0;
var Q1='y';
var Q1=prompt("Am I have bachelors degree?" );
if(Q1.toLowerCase()==='y'||Q1.toLowerCase==='yes'){
    alert('good start');
    score++;
    // console.log('good start')
} else{
    alert('Oopsno');
}


var Q2='n';
var Q2=prompt("Do I like cats");
if(Q2.toLowerCase()==='n' ||Q2.toLowerCase==='no'){
    alert('you are right');
    score++
    // console.log('you are right')
} else{
    alert('are you sure???!!');
}


var Q3='y';
var Q3=prompt("Do I live in Amman? ");
if(Q3.toLowerCase()==='y' ||Q3.toLowerCase==='yes'){
    alert('yes I do');
    score++
    // console.log('right')
} else{
    alert('actually I do');
}

var Q4='y';
var Q4=prompt("Do I like cooking?" );
if(Q4.toLowerCase()==='y'||Q4.toLowerCase==='yes'){
    alert('Correct!!');
    score++
    // console.log('right')
} else{
    alert('actually I do');
}
var Q5='n&&no';
var Q5=prompt("Is my favorite season is summer?" );
if(Q5.toLowerCase()==='n'||Q5.toLowerCase==='no'){
    alert('you are amzing');
    score++
    // console.log('right')
} else{
    alert('actually it is not summer');
}
var mydogage=3
var opp=[1,2,3,4]
for (var i=0; i<5;i++ ){
var mydogage = prompt('guess my dog age');
if(mydogage==4){
alert('right')
score++
break
}
 else if (mydogage>4){
    alert('too high')
}
else if(mydogage<4){
alert('too low')
}
}
alert('the correct answer is 4');

var favfruit=['mngo','peache']
var opp=[1,2,3,4,5,6]
for (var index=0;index<favfruit.length;index++){
var favfruit  =prompt('what is my favorite fruit?');
if(favfruit=='mango'||favfruit=='peache'){
    alert('WoOw you are really good');
    score++
    break
}else{
    alert('correct answers are mango and peache');
}
    
}
if (score>=4){
    alert('you are amazing you got '+score+'out of 7');
}else if(score<=3){
    alert('nooo you only got '+score+'out of 7');
}
confirm('we are done ... Thanks for your time');