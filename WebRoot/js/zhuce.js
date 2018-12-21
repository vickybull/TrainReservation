$(".submit")
		.click(
				function() {
					var name = $("input[name='name']").val().trim();
					var pw = $("input[name='pw']").val().trim();
					var pw1 = $("input[name='pw1']").val().trim();
					var phone = /^1[34578]\d{9}$/;
					var p = /^.{8,20}$/;

					if (name.length < 1) {
						$(".t").html('please input phone number').css("color",
								"#F00").css("font-size", "16px");
						alert("please input phone number");
						return;
					}
					if (!phone.test(name)) {
						$(".t").html('×').css("color", "#F00").css("font-size",
								"25px");
						alert("Incorrect format of mobile phone number");
						return;
					}
					if (pw.length == 0) {
						$(".t1").html('please input password').css("font-size",
								"16px").css("color", "red");
						alert("please input password");
						return;
					}
					if (!p.test(pw)) {

						$(".t1").html('Incorrect format of password').css(
								"font-size", "16px").css("color", "red");
						alert("Incorrect format of password");
						return;
					}
					if (pw != pw1) {
						$(".t2")
								.html(
										'The password is inconsistent. Please try again! Its incorrect.')
								.css("font-size", "16px").css("color", "red");
					}

					else {
						document.getElementById("submit").value = "wait...";

						$(".validate").show(200)
						$(".user").hide(200);
						document.getElementById("tell").innerHTML = name;
						$(".user_y").css("box-shadow", "0px 0px 5px 4px #fff");
					}
				});

$(document).ready(function(e) {
	$(".enter").on("click", function() {
		$(".validate").hide(200);
		$(".user").show(200);
		document.getElementById("submit").value = "下一步";
		$(".user_y").css("box-shadow", "none");
	});
});

function y_z_m() {
	var arr = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
			'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y',
			'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
			'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y',
			'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ];
	var str = '';
	for ( var i = 0; i < 4; i++)
		str += '' + arr[Math.floor(Math.random() * arr.length)];
	return str;
}
$("#wanc")
		.click(
				function() {

					var name = $("input[name='name']").val().trim();
					var pw = $("input[name='pw']").val().trim();
					var yz = $("input[name='yz']").val().trim();
					var yz1 = /^['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','0','1','2','3','4','5','6','7','8','9']{4}$/;
					if (yz.length == 0) {
						$(".yzm").html('').css("font-size", "16px").css(
								"color", "red");
						return;
					}
					if (document.getElementById("y_z_m").innerHTML != yz) {
						$(".yzm").html(
								'Please enter the validation code incorrectly')
								.css("font-size", "16px").css("color", "red");
						return;

					}
					if (!yz1.test(yz)) {

						$(".yzm").html('Verification code format incorrect')
								.css("font-size", "16px").css("color", "red");
						return;

					} else {
						
						$.ajax({
							type:"post",
							url:"/Reservation_system/register.action",    /*这里路径和网页中的路径共用开头data*/
							data:{
								name:name,
								pw:pw
							},
							dataType:"json",
							success:function(data){
								alert(data);
								if(data=="注册成功"){
									$(".complete").show(200);
									$(".validate").hide(200);
									document.getElementById("mob").innerHTML = name;
									$(".user_z").css("box-shadow", "0px 0px 5px 4px #fff");
								}else{
									$(".validate").hide(200);
									$(".user").show(200);
									document.getElementById("submit").value = "下一步";
									$(".user_y").css("box-shadow", "none");
								}
							},
							error:function(){
								alert("请检查输入是否有误");
							}
						});
					}

				});
$(".dj").click(function() {

	window.location = "login.jsp";
});

// 清空
$("#name,#pw,#pw1,#yz").focus(function() {
	$(".t,.t1,.t2,.yzm").html('');
});
