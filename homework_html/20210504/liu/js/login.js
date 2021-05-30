

$(document).ready(function(){
	  $("#login").click(function(){
		  debugger;
		  var userId = $("#id_user")[0].value;
		  window.location = 'select.html?userId='+userId+'&result=notView';

	  });
	});





