var x;
function output(num){
      var result=document.getElementById('randomNumber');
       result.value=num;
        x=num;
}
var click=document.getElementById('btn').addEventListener('click',function(){
  var code=Math.random()*10000;
  var rslt=Math.round(code);
  output(rslt);
});

let out=document.getElementById("input-text");

let calculate=(number)=>{
  out.value+=number;
}

let submt=()=>{
   var outDisplay=out.value;
   console.log(x);
   if(outDisplay==x)
   {
     var show=document.getElementById('hide');
     show.style.display='none';
     var print=document.getElementById('wrong-pin');
     print.style.display='block';
   }
   else{
     show=document.getElementById('hide');
    show.style.display='none';
     print=document.getElementById('pin-matches');
     print.style.display='block';
   }
}

function clr(){
  out.value='';
}
function del(){
  out.value=out.value.slice(0,-1);
}/*
function conditional(num2){
   var rand=document.getElementById('randomNumber');
   var finalRandom=rand.value;
   if(finalRandom===num2){
     console.log('matched your pin');
   }
   else
   {
     console.log('your pin is wrong')
   }
}
var submt=document.getElementById('sub').addEventListener('click',function(){
  var inputNumber=document.getElementById("input-text");
   var finalValue=inputNumber.value;
   conditional(finalValue);
};*/