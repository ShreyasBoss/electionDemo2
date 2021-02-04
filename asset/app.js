
 var bgimg = document.getElementById('img');
 var img2 = document.getElementById('img2');

let beep = new Audio('/asset/beep.mp3')
let msg = new Audio('/asset/b2.mp3')
function buttonclicked(){
beep.play()
img2.style.display='block';
bgimg.style.display='none';
msg.play()
}
window.onload=()=>{
	img2.style.display='none';
bgimg.style.display='block';
}