x=document.getElementById("html-border")
x.style.border="solid"
x.style.borderColor="steelblue";
x.style.backgroundColor="steelblue";

y=document.getElementById("javascript-border")
y.style.border="solid"
y.style.borderColor="steelblue";
y.style.backgroundColor="steelblue";

z=document.getElementById("css-border")
z.style.border="solid"
z.style.borderColor="steelblue";
z.style.backgroundColor="steelblue";

q=document.getElementById("react-border")
q.style.border="solid"
q.style.borderColor="steelblue";
q.style.backgroundColor="steelblue";
hwidth=0
jwidth=0
cwidth=0
rwidth=0

  setTimeout(() => {
var id1 = setInterval(frame, 15);


function frame(){
  if(hwidth>=55){
    clearInterval(id1)
    
    hwidth=0
    jwidth=0
    cwidth=0
    rwidth=0
   setTimeout(() => {
    id1 = setInterval(frame, 15);
   }, 2000);
   
  }else{
    hwidth=hwidth+0.55;
    x.style.width=hwidth+"%";
    jwidth=jwidth+0.40;
    y.style.width=jwidth+"%";
    cwidth=cwidth+0.45;
    z.style.width=cwidth+"%";
    rwidth=rwidth+0.30;
    q.style.width=rwidth+"%";

   }
}

}, 1500);

