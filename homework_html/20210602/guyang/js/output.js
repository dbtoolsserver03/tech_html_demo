$(document).ready(function(){
	$("#testj").click(function(){
		//alert($("#name").val())
		$("#check").val("名前："+$("#name").val()+"\n"
							+"二つ名："+$("#nick_name").val()+"\n"
							+"誕生日："+$("#birthday").val()+"\n"
							+"CV："+$("#cv").val()+"\n"
							+"スリーサイズ：B"+$("#ts_b").val()+" W"+$("#ts_w").val()+" H"+$("#ts_h").val()+"\n"
							+"身長："+$("#height").val()+"cm"+"\n"
							+"バ場適正：芝"+$("#grass option:selected").text()+" ダート"+$("#dirt option:selected").text()+"\n"
							+"距離適性：短距離"+$("#short option:selected").text()+" マイル"+$("#mile option:selected").text()
							+" 中距離"+$("#middle option:selected").text()+" 長距離"+$("#long option:selected").text()+"\n"
							+"脚質適性：逃げ"+$("#fr option:selected").text()+" 先行"+$("#stalker option:selected").text()
							+" 差し"+$("#sotp option:selected").text()+" 追込"+$("#offer option:selected").text()+"\n"
							)
	})
})