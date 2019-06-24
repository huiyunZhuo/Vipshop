
window.onload=function() {
	tag1 = 0;
	tag2=0;
	tag3=0;
	tag4=0;
	o1=0;
	o3=0;
	o4=0;
}
function show(myid){
	document.getElementById(myid).style.display="block";
}
function dis(myid){
	document.getElementById(myid).style.display="none";
}
function move(myid){
	document.getElementById(myid).style.borderColor="gray";
	if (tag1 == 1) {
		document.getElementById('one').style.borderColor="red";
	}
		if (tag2==1) {
		document.getElementById('two').style.borderColor="red";
	}
		if (tag3==1) {
		document.getElementById('three').style.borderColor="red";
	}
		if (tag4==1) {
		document.getElementById('four').style.borderColor="red";
	}
}
function leve(myid){
	document.getElementById(myid).style.borderColor="#B2B2B2";
		if (tag1 == 1) {
		document.getElementById('one').style.borderColor="red";
	}
	if (tag2==1) {
		document.getElementById('two').style.borderColor="red";
	}
	if (tag3==1) {
		document.getElementById('three').style.borderColor="red";
	}
	if (tag4==1) {
		document.getElementById('four').style.borderColor="red";
	}
}
function oc1(){
	 var x =document.getElementById('one').value;
	 if(x.length==0){show('one_1');dis('one_2');
	 	document.getElementById('one').style.borderColor="red";
	 	tag1 = 1;
	 }
	 else if (x.length!=11) {show('one_2');dis('one_1')
	 	document.getElementById('one').style.borderColor="red";
	 	tag1 = 1;
	 }
	 else{
	 	dis('one_1');dis('one_2');
	 	tag1=0;
	 	document.getElementById('one').style.borderColor="#B2B2B2";
	 	document.getElementById('yanzhengma').style.background="#FCEEF2";
	 	document.getElementById('yanzhengma').style.borderColor="#FFBEE0";
	 	document.getElementById('yanzhengma').style.color="#E051B8";
	 }
	 dis('one_3');
}
function ocl1(){
	if (o1==0) {
		show('one_3');
		document.getElementById('one').style.borderColor="#B2B2B2";o1=1;
	}
	else{
		document.getElementById('one').style.borderColor="#B2B2B2";
		dis('one_1');dis('one_2');
	}
}
function oc2(){
	var x=document.getElementById('two').value;
	if (x.length!=6) {show('two_1');
	 	document.getElementById('two').style.borderColor="red";
	 	tag2 = 1;}
	 	else {
	 		dis('two_1');
	 		tag2=0;
	 		document.getElementById('two').style.borderColor="#B2B2B2";
	 	}
}
function oc3(){
	 var x =document.getElementById('three').value;
	 if (x.length==0) {
	 	show('three_1');dis('three_3');dis('three_4');
	 	document.getElementById('three').style.borderColor="red";
	 	tag3=1;
	 }else if(x.length<6||x.length>20){
	 	dis('three_1');dis('three_3');
	 	show('three_4');
	 	document.getElementById('three').style.borderColor="red";
	 	tag3=1;
	 }else if(x.length<10){
	 	dis('three_1');dis('three_4');
	 	document.getElementById('three').style.borderColor="#B2B2B2";
	 	tag3=0;show('three_3');
	 }
	 else{
	 		 	dis('three_1');dis('three_4');dis('three_2');
	 		 	document.getElementById('three').style.borderColor="#B2B2B2";
	 	tag3=0;
	 }
	 dis('three_2');
}

function ocl3(){
	if (o3==0) {
		show('three_2');
		document.getElementById('three').style.borderColor="#B2B2B2";o3=1;
	}
	else{
		document.getElementById('three').style.borderColor="#B2B2B2";
		dis('three_1');dis('three_4');dis('three_3');
	}
}
function oc4(){
	var x=document.getElementById('four').value;
	var xx=document.getElementById('three').value;
	if(x.length==0){
		show('four_1');document.getElementById('four').style.borderColor="red";
		tag4=1;
		dis('four_2');
	}
	else if (x!=xx) {
		show('four_2');document.getElementById('four').style.borderColor="red";
		tag4=1;
		dis('four_1');
	}
	else{
		dis('four_1');
		dis('four_2');
		tag4=0;
		document.getElementById('four').style.borderColor="#B2B2B2";
	}
}
function ocl4(){
	dis('four_1');
	dis('four_2');
	document.getElementById('four').style.borderColor="#B2B2B2";
}