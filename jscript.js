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
   if(outDisplay==x)
   {
     var show=document.getElementById('hide');
     show.style.display='none';
     var print=document.getElementById('pin-matches');
     print.style.display='block';
   }
   else{
     show=document.getElementById('hide');
    show.style.display='none';
     print=document.getElementById('wrong-pin');
     print.style.display='block';
   }
}

function clr(){
  out.value='';
}
function del(){
  out.value=out.value.slice(0,-1);
}