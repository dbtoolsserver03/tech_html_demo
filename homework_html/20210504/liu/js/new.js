

function setReadOnly() {
	$("#id_info").find("*").each(function(){
		$(this).attr("disabled",true);
		}
	);
}
$(document).ready(function(){
	
	String.prototype.getQuery = function(name)
	{
	    var reg = new RegExp("(^|&)"+ name+"=([^&]*)(&|$)");
	    var r = this.substr(this.indexOf("?")+1).match(reg);
	    if(r!=null) return decodeURIComponent(r[2]); 
	    return null;
	}
	
	
	var str = location.search;
	var paraUserIdVal = str.getQuery("userId");
	$("#id_user").text(paraUserIdVal);
	var paraSelectVal = str.getQuery("selectVal");
	var paraModeVal = str.getQuery("mode");
	
	var paraNameVal = str.getQuery("name");
	var paraSexVal = str.getQuery("sex");
	var paraAgeVal = str.getQuery("age");
	var paraTypeVal = str.getQuery("type");
	
	
	var type = "";
	if("new" == paraModeVal) {
		type = "新規";
	} else if("detail" == paraModeVal) {
		type = "詳細";
		$("#id_btn_clear").addClass("button button1-display-none");
		$("#id_btn_ok").addClass("button button1-display-none");
		setReadOnly();
	} else if("update" == paraModeVal) {
		type = "更新";
		
	} else if("delete" == paraModeVal) {
		type = "削除";
		$("#id_btn_clear").addClass("button button1-display-none");
		setReadOnly();
	}
	

	
	$('title').text('アザラシ情報'+type);
	
	  $("#id_btn_back").click(function(){
		  
		  var paraSelectVal = str.getQuery("selectVal");
		  var paraName = str.getQuery("name");
		  window.location = 'select.html?userId='+paraUserIdVal+'&result=notView';
			
	  });
	  
	  
	  
	  $("#id_btn_clear").click(function(){

		  // https://www.cnblogs.com/fanbi/p/7705235.html
		  $("#id_select_type")[0][0].selected=true;
		  
		  $("input[type='text'],[type='date']").each(function(){
				$(this).val("");
				}
			);
		  $("input[type='checkbox']").each(function(){
				$(this).prop("checked",false);
				}
			);
		  $("input[type='radio']").each(function(){
				$(this).prop("checked",false);
				}
			);
		  $("#id_text_detail").each(function(){
			 $(this).val("");  
		  }
		  ); 
		  
		  
		  
	  });
	  
	  $("#id_btn_ok").click(function(){

		  if(confirm(type + "処理を行います。")){
			  window.location = 'select.html?userId='+paraUserIdVal+'&result=notView';
		  }
	  });
  
	});
	
	
	
	
	function jump3(){
      debugger;
	  window.location = 'login.html';
}
	