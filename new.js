//modal
var modal=document.getElementById('simpleModal');
window.addEventListener('click',outsideClick);
function outsideClick(e){
	if(e.target==modal){
		modal.style.display='none';
	}
}



//animation:)
function brakeChain(){
  		let chain=document.getElementById('chain');
  		chain.innerHTML="&#xf0c1;";
  		setTimeout(function()
  		{
  			chain.innerHTML='&#xf127;';
  		 },1000);
  		}
  	brakeChain();
  	setInterval(brakeChain,1500);

//hovering--
  function mDown(obj) {
    obj.style.color='rgb(255,85,51)';
    obj.innerHTML = "Hi!";
    obj.style.fontStyle="initial"
}

function mUp(obj) {
    var object=document.getElementById('cng');
    obj.style.color="white";
    object.style.fontStyle="italic";
    object.style.fontFamily="Verdana"
    obj.innerHTML="WEB DEVELOPMENT PORTFOLIO"; 
}