
window.onload=function() {
	tag = 0;
	tagg=0;
}
function show(myid){
	document.getElementById(myid).style.display="block";
}
function dis(myid){
	document.getElementById(myid).style.display="none";
}
function move(myid){
	document.getElementById(myid).style.borderColor="gray";
	if (tag == 1) {
		document.getElementById('one').style.borderColor="#f10280";
	}
		if (tagg==1) {
		document.getElementById('two').style.borderColor="#f10280";
	}
}
function leve(myid){
	document.getElementById(myid).style.borderColor="#B2B2B2";
		if (tag == 1) {
		document.getElementById('one').style.borderColor="#f10280";
	}
		if (tagg==1) {
		document.getElementById('two').style.borderColor="#f10280";
	}
}
function oc1(){
	 var x =document.getElementById('one').value;
	 if(x.length==0){show('passname');
	 	document.getElementById('one').style.borderColor="#f10280";
	 	tag = 1;
	 }
	 else{
	 	dis('passname');
	 	tag=0;
	 	document.getElementById('one').style.borderColor="#B2B2B2";
	 }
}
function oc2(){
	 var x =document.getElementById('two').value;
	 if(x.length==0){show('password');
	 	document.getElementById('two').style.borderColor="#f10280";
	 	tagg = 1;
	 }
	 else{
	 	dis('password');
	 	tagg=0;
	 	document.getElementById('two').style.borderColor="#B2B2B2";
	 }
}
function xl_a(){
	document.getElementById('first').style.color="#f10280";
}
function xl_b(){
	document.getElementById('first').style.color="#333333";
}
