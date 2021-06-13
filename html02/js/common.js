
// DOM编程
function output() {

	var element=document.getElementById("id_text_sei");
	debugger;

	var len = document.getElementsByName("level").length;

	var selectVal = "";
	for(var i = 0 ; i < len; i++){

		var obj = document.getElementsByName("level")[i];
		if(obj.checked == true){
			selectVal = obj.value;
		}

	}

	document.getElementById("id_content").innerText = "name:"+element.value + "\nlevel:"+selectVal;

}