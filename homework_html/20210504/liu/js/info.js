

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
	
	if ("new" != paraModeVal) {
		
		$("#id_select_type")[0][5].selected = true;
		$("#id_text_detail").val("暂无")
		
		if(paraSelectVal=="1"){
			$("#id_text_name").val("大吉");
			$("#id_radio_sex1").attr("checked",true);
			$("#id_text_age").val(20);
			$("#id_chk_wan").attr("checked",true);
			$("#id_chk_shui").attr("checked",true);
			$("#id_text_weight").val("10kg");
			$("#id_text_date").val("2010-01-01");
			
		}else if(paraSelectVal=="2"){
			$("#id_text_name").val("はる");
			$("#id_radio_sex2").attr("checked",true);
			$("#id_text_age").val(15);
			$("#id_chk_yu").attr("checked",true);
			$("#id_text_weight").val("12kg");
			$("#id_text_date").val("2017-08-11");
		}else if(paraSelectVal=="3"){
			$("#id_text_name").val("そら");
			$("#id_radio_sex2").attr("checked",true);
			$("#id_text_age").val(1);
			$("#id_chk_you").attr("checked",true);
			$("#id_text_weight").val("3kg");
			$("#id_text_date").val("2020-05-30");
		}else {
			$("#id_text_name").val("のの");
			$("#id_radio_sex1").attr("checked",true);
			$("#id_text_age").val(14);
			$("#id_chk_yu").attr("checked",true);
			$("#id_chk_wan").attr("checked",true);
			$("#id_text_weight").val("7kg");
			$("#id_text_date").val("2017-03-02");
		}
		
	}
	
	$('title').text('アザラシ情報'+type);
	
	  $("#id_btn_back").click(function(){
		  
		  var paraSelectVal = str.getQuery("selectVal");
		  var paraName = str.getQuery("name");
		  window.location = 'select.html?userId='+paraUserIdVal+'&selectVal='+paraSelectVal+'&name='+paraName;
			
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

