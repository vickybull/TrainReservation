$(document).ready(function(){
   
   var pos = $(".loginbox .head a").eq(1).position();
   var width = $(".loginbox .head a").eq(1).width();
   
   $(".loginbox .bottomline").css({'left':pos.left+'px','width':width+'px'});
   $(".loginbox .ct .item").eq(1).show();

  
   $(".loginbox .head a").click(function(){
   	   var index = $(this).index();
   	  
   	   $(".loginbox .ct .item").hide();
   
   	   $(".loginbox .ct .item").eq(index).show();
   	
   	   pos = $(this).position();
       width = $(this).width();       
       $(".loginbox .bottomline").animate({'left':pos.left+'px','width':width+'px'},300);
       
       $(this).addClass('sel').siblings().removeClass("sel");
   });
 
   $(".delusername").click(function(){
   		$("input[name='username']").val('');
   });

 
   $(".outbox").click(function(){
   	   $(this).find(".checkbox").toggleClass('sel');
   });

   $(".submitBtn").click(function(){
   	   var username = $("input[name='username']").val().trim();
   	   var password = $("input[name='password']").val().trim();
      /* var patrn_0 = /^[1-9][0-9]{5,12}$/;//��֤�ֻ��Ż�qq��*/
	   var patrn_0 = /^1[34578]\d{9}$/;//��֤�ֻ���
     /*  var patrn_1= /^[1-9][0-9]{4,}@qq\.com$/;//��֤����  */ 
   

   	   if(username.length<1)
   	   {
   	   	   $(".logintip").html('Please input account number.');
		   alert("Please input account number.");
   	   	   return;
   	   }
   	   if(!patrn_0.test(username)/* && !patrn_1.test(username)*/)
   	   {
          $(".logintip").html('Incorrect format of mobile phone number');
		   alert("Incorrect format of mobile phone number");
   	   	   return;
   	   } 
        if(password.length<8)
        {
        	$(".logintip").html('Please enter the correct password');
			 alert("Please enter the correct password");
   	   	   return;
        }
		if(event.keyCode==13){
			
			return;
			
			}
		$.ajax({
			type:"post",
			url:"/Reservation_system/login.action",    /*����·������ҳ�е�·�����ÿ�ͷdata*/
			data:{
				username:username,
				password:password
			},
			dataType:"json",
			success:function(data){
				alert(data);    			/*�����data��Ӧaction�д��͹�����data*/
				$('#userid').val("");  		/*�ɹ��󽫱������Ϊ��*/
				$('#password').val("");
				//var d = 
				if(data=="loginsuccess"){
					location.href='index.html';
				}
					
				else{
					location.reload();
				}
			},
			error:function(){
				alert("wrong");
			}
		});

   });

   //���
   $(".loginbox .inputbox input").focus(function(){
   	   $(".logintip").html('');
   });

});




