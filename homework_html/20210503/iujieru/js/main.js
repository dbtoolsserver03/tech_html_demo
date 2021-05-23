function jump(){
	debugger;
		var user=document.getElementById("id_user").value;
		var password=document.getElementById("password_user").value;
		var choose = confirm("ログインIDは["+user+"]passwordは["+password+"]で間違いないでしょうか");
		if(choose==true){  
			window.location.href='select.html';
			return false;
		 }
}


function jump1(){
      debugger;
	  window.location = 'login.html';
}

function jump2(){
      debugger;
	  window.location = 'detail.html';
}

function jump3(){
      debugger;
	  window.location = 'login.html';
}

$(document).ready(function(){
 
	  $("#select").click(function(){
		$("#detail").fadeIn(2000);
		$("#delete").fadeIn(1500);
		$("#update").fadeIn(1000);
	    $("#div1").fadeIn("slow");
	   
	  });
});


