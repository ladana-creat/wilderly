(function(){
 var views={home:document.getElementById('home'),booking:document.getElementById('booking')};
 var nb=document.getElementById('nb'),nh=document.getElementById('nh');
 function show(v){
  for(var k in views)views[k].classList.toggle('active',k===v);
  try{history.replaceState(null,'','#'+v)}catch(x){}
  nb.classList.toggle('on',v==='booking');nh.classList.toggle('on',v==='home');
  nb.removeAttribute('aria-current');nh.removeAttribute('aria-current');
  (v==='booking'?nb:nh).setAttribute('aria-current','page');
 }
 document.addEventListener('click',function(e){
  var t=e.target.closest('[data-go]');if(!t)return;
  e.preventDefault();var g=t.getAttribute('data-go');
  if(g==='home'||g==='booking'){show(g);window.scrollTo({top:0,behavior:'smooth'});}
  else if(g==='about'){show('home');setTimeout(function(){document.getElementById('about').scrollIntoView({behavior:'smooth'})},30);}
  else if(g==='contact'){document.getElementById('contact').scrollIntoView({behavior:'smooth'});}
 });
 if(location.hash==='#booking')show('booking');
 var tr=document.getElementById('track');
 function step(d){var c=tr.querySelector('.card');tr.scrollBy({left:d*(c.offsetWidth+34),behavior:'smooth'});}
 document.getElementById('prev').onclick=function(){step(-1)};
 document.getElementById('next').onclick=function(){step(1)};
 document.getElementById('form').addEventListener('submit',function(e){
  e.preventDefault();var b=document.getElementById('sendBtn');b.textContent='Sent ✓';
  setTimeout(function(){b.textContent='Send';e.target.reset();},2500);
 });
})();