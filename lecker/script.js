(function(){
 function toTop(){window.scrollTo({top:0,behavior:'smooth'});}
 document.addEventListener('click',function(e){
  var t=e.target.closest('[data-go]');if(!t)return;
  e.preventDefault();var g=t.getAttribute('data-go');
  if(g==='home'){toTop();}
  else if(g==='about'){document.getElementById('about').scrollIntoView({behavior:'smooth'});}
  else if(g==='contact'){document.getElementById('contact').scrollIntoView({behavior:'smooth'});}
 });
 var tr=document.getElementById('track');
 function step(d){var c=tr.querySelector('.card');tr.scrollBy({left:d*(c.offsetWidth+34),behavior:'smooth'});}
 document.getElementById('prev').onclick=function(){step(-1)};
 document.getElementById('next').onclick=function(){step(1)};
 document.getElementById('form').addEventListener('submit',function(e){
  e.preventDefault();var b=document.getElementById('sendBtn');b.textContent='Sent ✓';
  setTimeout(function(){b.textContent='Send';e.target.reset();},2500);
 });
})();