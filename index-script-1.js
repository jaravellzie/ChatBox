$(document).ready(function(){

	$("#btnSend").click(function(){

		var msgStore=$("#chatText").val();
		$("#chatText").val("");

		var prevMsg=$("#chatBox-2").html();
		$("#chatBox-2").html(prevMsg+"<b>Aaron: </b>"+msgStore+"<br>");

		$("#chatBox-2").scrollTop($("#chatBox-2").prop("scrollHeight"));
	});

	$("#chatText").keypress(function(event){
		if(event.which==13){ //Enter Key = 13
			$("#btnSend").click();
			event.preventDefault();
		}
	});
}); 