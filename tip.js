function calulateTip(){
	var billAmt = document.getElementById("amt").value;
	var service = document.getElementById("dropdown").value;
	var number = document.getElementById("ppl").value;

	if(billAmt === '' || service == 0){
		alert("Please enter values");
		return;
	}

	if(number === '' || number <= 1){
		number = 1;
		document.getElementById("each").style.display = "none";
	}
	else{
		document.getElementById("each").style.display = "block";
	}
	

	var total = (billAmt * service)/number;
	total = Math.round(total*100)/100;
	total = total.toFixed(2);

	document.getElementById("totalTip").style.display = "block";
	document.getElementById("tip").innerHTML = total;
}

	document.getElementById("totalTip").style.display = "none";
	document.getElementById("each").style.display = "none";

document.getElementById("calc").onclick = function(){
		calulateTip();
	};


