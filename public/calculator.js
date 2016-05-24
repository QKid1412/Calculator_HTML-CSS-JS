

function checknum(x){
	if(isNaN(x) || x == ''){
		return false;
	}else{
		return true;
	}
}
function checkden(x){
	if(isNaN(x) || x == ''|| (parseInt(x)==0)){
		return false;
	}else{
		return true;
	}
}

function Calcpercentage(elementName){

	var num1 = document.getElementById("box1").value;
	var den1 = document.getElementById("box2").value;
	if( checknum(num1) && checkden(den1)) {
		document.getElementById("p1").innerHTML=(100*num1/den1).toFixed(2) + "%"
	}else {
		document.getElementById("p1").innerHTML="Please enter valid values.";
	}
	var num2 = document.getElementById("box3").value;
	var den2 = document.getElementById("box4").value;
	if( checknum(num2) && checkden(den2)) {
		document.getElementById("p2").innerHTML=(100*num2/den2).toFixed(2) + "%";
	}else {
		document.getElementById("p2").innerHTML="Please enter valid values.";
	}
	var num3 = document.getElementById("box5").value;
	var den3 = document.getElementById("box6").value;
	if( checknum(num3) && checkden(den3)) {
		document.getElementById("p3").innerHTML=(100*num3/den3).toFixed(2) + "%";
	}else {
		document.getElementById("p3").innerHTML="Please enter valid values.";
	}
	var num4 = document.getElementById("box7").value;
	var den4 = document.getElementById("box8").value;
	if( checknum(num4) && checkden(den4) ) {
		document.getElementById("p4").innerHTML=(100*num4/den4).toFixed(2) + "%";
	}else {
		document.getElementById("p4").innerHTML="Please enter valid values.";
	}
}

function CalcMean(elementName){
	var percentage = 0.000;
	var countvalid = 0;
	var num1 = document.getElementById("box1").value;
	var den1 = document.getElementById("box2").value;
	if( checknum(num1) && checkden(den1)) {
		var per1 = (parseFloat(num1)/parseFloat(den1)).toFixed(3);
		percentage += parseFloat(per1);
		countvalid ++;
	}else {
		alert("Activity 1 will be omitted")
	}
	var num2 = document.getElementById("box3").value;
	var den2 = document.getElementById("box4").value;
	if( checknum(num2) && checkden(den2)) {
		var per2 = (parseFloat(num2)/parseFloat(den2)).toFixed(3);
		percentage += parseFloat(per2);
		countvalid ++;
	}else {
		alert("Activity 2 will be omitted")
	}
	var num3 = document.getElementById("box5").value;
	var den3 = document.getElementById("box6").value;
	if( checknum(num3) && checkden(den3)) {
		var per3 = (parseFloat(num3)/parseFloat(den3)).toFixed(3);
		percentage += parseFloat(per3);
		countvalid ++;
	}else {
		alert("Activity 3 will be omitted")
	}
	var num4 = document.getElementById("box7").value;
	var den4 = document.getElementById("box8").value;
	if( checknum(num4) && checkden(den4) ) {
		var per4 = (parseFloat(num4)/parseFloat(den4)).toFixed(3);
		percentage += parseFloat(per4);
		countvalid ++;
	}else {
		alert("Activity 4 will be omitted")
	}
	if(checkden(countvalid)){
		document.getElementById("res").innerHTML= (100*parseFloat(percentage)/countvalid).toFixed(2) + "%";
	}else{
		alert("No usable values");
	}

}
