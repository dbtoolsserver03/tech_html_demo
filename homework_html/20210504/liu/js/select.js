

	$(document)
			.ready(
					function() {

						debugger;
						String.prototype.getQuery = function(name) {
							var reg = new RegExp("(^|&)" + name
									+ "=([^&]*)(&|$)");
							var r = this.substr(this.indexOf("?") + 1).match(
									reg);
							if (r != null)
								return decodeURIComponent(r[2]);
							return null;
						}
						var str = location.search;
						var paraUserIdVal = str.getQuery("userId");
						$("#id_user").text(paraUserIdVal);
						
						var paraResultVal = str.getQuery("result");
						var paraNameVal = str.getQuery("name");
						var paraSexVal = str.getQuery("sex");
						var paraAgeVal = str.getQuery("age");
						var paraTypeVal = str.getQuery("type");
						var paraSelectVal = str.getQuery("selectVal");

						if ("notView" == paraResultVal) {
							//$("#id_result_list").css('display', 'none');
							$("#detail").addClass(
									"button button1-display-none");
							$("#update").addClass(
									"button button1-display-none");
							$("#delete").addClass(
									"button button1-display-none");

						} else if ("" == paraNameVal || "大吉" == paraNameVal || "はる" == paraNameVal　|| "そら" == paraNameVal　|| "のの" == paraNameVal) {
							//paraNameVal为大吉或はる或そら或のの或者空值时，显示列表，显示三个不能使用的按钮
							$("#id_result_list").css('display', 'block');
							$("#id_result_list").fadeIn("slow");
							$("#detail").addClass("button button1gray");
							$("#update").addClass("button button1gray");
							$("#delete").addClass("button button1gray");

							$("#detail").attr("disabled", true);
							$("#update").attr("disabled", true);
					        $("#delete").attr("disabled", true);
							
						
						} else {//不为上述名字时时不显示列表，不显示按钮
							$("#id_result_list").css('display', 'none');
							$("#detail").addClass(
									"button button1-display-none");
							$("#update").addClass(
									"button button1-display-none");
							$("#delete").addClass(
									"button button1-display-none");
						}
						if (paraSelectVal != null && paraSelectVal != "") {//当选中任意单选按钮时
							$("#detail")[0].className = "button button1";
							$("#update")[0].className = "button button1";
							$("#delete")[0].className = "button button1";
							$("#detail").attr("disabled", false);
							$("#update").attr("disabled", false);
							$("#delete").attr("disabled", false);

							$("#id_rdo_selected_" + paraSelectVal).attr(
									"checked", true);

						}

						$("#id_text_name").val(paraNameVal);
						$("#id_radio_sex1").val(paraSexVal);
						$("#id_radio_sex2").val(paraSexVal);
						$("#id_text_age").val(paraAgeVal);
						$("#id_select_type").val(paraTypeVal);

						if($("#id_radio_sex" + paraSexVal).length >0) {
						$("#id_radio_sex" + paraSexVal)[0].checked = true;
						}
						

						$('input:radio[name="kind"]').click(function() {//当点击任意单选按钮时
							$("#detail")[0].className = "button button1";
							$("#update")[0].className = "button button1";
							$("#delete")[0].className = "button button1";

							$("#detail").attr("disabled", false);
							$("#update").attr("disabled", false);
							$("#delete").attr("disabled", false);
						});

						// ボタンコントロール
						$("#search").click(
								function() {
								var radioVal = "";
								if($("#id_radio_sex1")[0].checked) {
									radioVal ="1";
								}
								if($("#id_radio_sex2")[0].checked) {
									radioVal ="2";
								}
									var paraCommon = '&name='
											+ $("#id_text_name").val() + '&sex='
											+ radioVal+'&age='
											+ $("#id_text_age").val()
											+ '&type='
											+ $("#id_select_type").val();
									window.location = 'select.html?userId='
											+ paraUserIdVal + paraCommon;
						
								});
						$("#new")
								.click(
										function() {
											var paraCommon = '&name='
												+ $("#id_text_name").val() + '&sex='
												+ $("#id_radio_sex1").val() + $("#id_radio_sex2").val()+ '&age='
												+ $("#id_text_age").val()
												+ '&type='
												+ $("#id_select_type").val();
											
											
											window.location = 'new.html?userId='
													+ paraUserIdVal
													+ '&mode=new&selectVal='
													+ $(
															'input:radio[name="kind"]:checked')
															.val() + paraCommon;
										});
						$("#detail")
								.click(
										function() {
											var paraCommon = '&name='
												+ $("#id_text_name").val() + '&sex='
												+ $("#id_radio_sex1").val() + $("#id_radio_sex2").val()+ '&age='
												+ $("#id_text_age").val()
												+ '&type='
												+ $("#id_select_type").val();
											window.location = 'info.html?userId='
												+ paraUserIdVal
												+ '&mode=detail&selectVal='
												+ $(
														'input:radio[name="kind"]:checked')
														.val() + paraCommon;
										});
						$("#update")
								.click(
										function() {
											var paraCommon = '&name='
												+ $("#id_text_name").val() + '&sex='
												+ $("#id_radio_sex1").val() + $("#id_radio_sex2").val()+ '&age='
												+ $("#id_text_age").val()
												+ '&type='
												+ $("#id_select_type").val();
											window.location = 'info.html?userId='
												+ paraUserIdVal
												+ '&mode=update&selectVal='
												+ $(
														'input:radio[name="kind"]:checked')
														.val() + paraCommon;
										});
						$("#delete")
								.click(
										function() {
											var paraCommon = '&name='
												+ $("#id_text_name").val() + '&sex='
												+ $("#id_radio_sex1").val() + $("#id_radio_sex2").val()+ '&age='
												+ $("#id_text_age").val()
												+ '&type='
												+ $("#id_select_type").val();
											
											
											
											window.location = 'info.html?userId='
												+ paraUserIdVal
												+ '&mode=delete&selectVal='
												+ $(
														'input:radio[name="kind"]:checked')
														.val() + paraCommon;
										});
					});

function jump3(){
      debugger;
	  window.location = 'login.html';
}

