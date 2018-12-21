		$(function() {
			var d;
			var tag=0;
			$('#checkButton')
					.click(
							function() {
								
								var chu = $('#startStation').val();
								var dao = $('#arriveStation').val();
								var time = $('#date').val();
								if (chu == "" || dao == "" || time == "") {
									alert("出发站和到达站不能为空");
									return false;
								}
								$
										.ajax({
											type : "post",
											url : "/Reservation_system/check.action",
											data : {
												chu : chu,
												dao : dao,
												time : time
											},
											dataType : "json",
											success : function(data) {
												d = eval("(" + data + ")");
												if(d.length==0){
													alert("没有该线路的票");
													return false;
												}
												var str = "";
												for ( var i = 0; i < d.length; i++) {
													str += "<tr class='tr'>"
													str += '<td><div type="text" class="checi form-control" ></div></td>'
													str += '<td><div type="text" class="fazhan form-control" ></div></td>'
													str += '<td><div type="text" class="daozhan form-control" ></div></td>'
													str += '<td><div type="text" class="fashi form-control" ></div></td>'
													str += '<td><div type="text" class="daoshi form-control" ></div></td>'
													str += '<td><div type="text" class="time form-control" ></div></td>'
													str += '<td><div type="text" class="shangwu form-control" ></div></td>'
//													str += '<td><div type="text" class="shangwum form-control" ></div></td>'
													str += '<td><div type="text" class="yideng form-control" ></div></td>'
//													str += '<td><div type="text" class="yidengm form-control" ></div></td>'
													str += '<td><div type="text" class="erdeng form-control" ></div></td>'
//													str += '<td><div type="text" class="erdengm form-control" ></div></td>'
													str += '<td><div type="text" class="gaojiruan form-control" ></div></td>'
//													str += '<td><div type="text" class="gaojiruanm form-control" ></div></td>'
													str += '<td><div type="text" class="ruan form-control" ></div></td>'
//													str += '<td><div type="text" class="ruanm form-control" ></div></td>'
													str += '<td><div type="text" class="yingwo form-control" ></div></td>'
//													str += '<td><div type="text" class="yingwom form-control" ></div></td>'
													str += '<td><div type="text" class="ruanzuo form-control" ></div></td>'
//													str += '<td><div type="text" class="ruanzuom form-control" ></div></td>'
													str += '<td><div type="text" class="yingzuo form-control" ></div></td>'
//													str += '<td><div type="text" class="yingzuom form-control" ></div></td>'
													str += '<td><div type="text" class="wuzuo form-control" ></div></td>'
//													str += '<td><div type="text" class="wuzuom form-control" ></div></td>'
													str += '</tr>'
													
												}
												$('#tbody').html(str)
												setval();
												
												 $.each($('.tr').children().eq(1).find('div'),function(i){
													$(this).css('width',80+'px')
												})
												$.each($('.tr').children().eq(2).find('div'),function(i){
													$(this).css('width',60+'px')
												})
												$.each($('.tr').children().eq(3).find('div'),function(i){
													$(this).css('width',60+'px')
												})
												$.each($('.tr').children().eq(4).find('div'),function(i){
													$(this).css('width',60+'px')
												})
												$.each($('.tr').children().eq(5).find('div'),function(i){
													$(this).css('width',116+'px')
												})
												 
											}
										});

							});
			$('#jiage').click( function(){
				if(tag==0){
					$('#a').text("商务座价格");
					$('#b').text("一等座价格");
					$('#c').text("二等座价格");
					$('#d').text("高级软卧价格");
					$('#e').text("软卧价格");
					$('#f').text("硬卧价格");
					$('#g').text("软座价格");
					$('#h').text("硬座价格");
					$('#i').text("无座价格");
					$.each($('.shangwu'), function(i) {
					$(this).text(d[i].shangwum)
					})
					$.each($('.yideng'), function(i) {
					$(this).text(d[i].yidengm)
					})
					$.each($('.erdeng'), function(i) {
					$(this).text(d[i].erdengm)
					})
					$.each($('.gaojiruan'), function(i) {
						$(this).text(d[i].gaojiruanm)
					})
					$.each($('.ruan'), function(i) {
						$(this).text(d[i].ruanm)
					})
					$.each($('.yingwo'), function(i) {
						$(this).text(d[i].yingwom)
					})
					$.each($('.ruanzuo'), function(i) {
						$(this).text(d[i].ruanzuom)
					})
					$.each($('.yingzuo'), function(i) {
						$(this).text(d[i].yingzuom)
					})
					$.each($('.wuzuo'), function(i) {
						$(this).text(d[i].wuzuom)
					})
					tag=1;
				}else{
					$('#a').text("商务座余票");
					$('#b').text("一等座余票");
					$('#c').text("二等座余票");
					$('#d').text("高级软卧余票");
					$('#e').text("软卧余票");
					$('#f').text("硬卧余票");
					$('#g').text("软座余票");
					$('#h').text("硬座余票");
					$('#i').text("无座余票");
					setval2();
					tag=0;
				}
				
			});
			$('#btn1').click(function() {
				d.sort(sortdaoshij);
				setval();
			});
			$('#btn2').click(function() {
				d.sort(sortdaoshis);
				setval();
			});
			$('#btn4').click(function() {
				d.sort(sortytdao);
				setval();
			});
			$('#btn3').click(function() {
				d.sort(sortytzheng);
				setval();	
			});
			$('#btn5').click(function() {
				d.sort(sortetdao);
				setval();
			});
			$('#btn6').click(function() {
				d.sort(sortetzheng);
				setval();	
			});
			$('#btn7').click(function() {
				d.sort(sortstdao);
				setval();
			});
			$('#btn8').click(function() {
				d.sort(sortstzheng);
				setval();	
			});
			$('#btn9').click(function() {
				d.sort(sortfashij);
				setval();
			});
			$('#btn0').click(function() {
				d.sort(sortfashis);
				setval();
			});
			function sortytdao(a,b){                      //一等余票逆序
				return b.yideng-a.yideng;
			}
			function sortytzheng(a,b){                      // 一等余票正序             
				return a.yideng-b.yideng;
			}
			function sortetzheng(a,b){
				return a.erdeng-b.erdeng;
			}
			function sortetdao(a,b){
				return b.erdeng-a.erdeng;
			}
			function sortstzheng(a,b){
				return a.shangwu-b.shangwu;
			}
			function sortstdao(a,b){
				return b.shangwu-a.shangwu;
			}
			function sortdaoshis(a,b){                        //到时正序
				var tmp1 = a.daoshi;
				var tmp2 = b.daoshi;
				tmp1 = tmp1.replace(":","");
				tmp2 = tmp2.replace(":","");
				return tmp2-tmp1;
			}
			function sortdaoshij(a,b){                        //到时倒序
				var tmp1 = a.daoshi;
				var tmp2 = b.daoshi;
				tmp1 = tmp1.replace(":","");
				tmp2 = tmp2.replace(":","");
				return tmp1-tmp2;
			}
			function sortfashis(a,b){                        //发时正序
				var tmp1 = a.daoshi;
				var tmp2 = b.daoshi;
				tmp1 = tmp1.replace(":","");
				tmp2 = tmp2.replace(":","");
				return tmp2-tmp1;
			}
			function sortfashij(a,b){                        //发时倒序
				var tmp1 = a.daoshi;
				var tmp2 = b.daoshi;
				tmp1 = tmp1.replace(":","");
				tmp2 = tmp2.replace(":","");
				return tmp1-tmp2;
			}
			function setval() {
				$.each($('.checi'), function(i) {
					$(this).text(d[i].checi)
				})
				$.each($('.fazhan'), function(i) {
					$(this).text(d[i].fazhan)
				})
				$.each($('.daozhan'), function(i) {
					$(this).text(d[i].daozhan)
				})
				$.each($('.fashi'), function(i) {
					$(this).text(d[i].fashi)
				})
				$.each($('.daoshi'), function(i) {
					$(this).text(d[i].daoshi)
				})
				$.each($('.time'), function(i) {
					$(this).text(d[i].time)
				})
				$.each($('.shangwu'), function(i) {
					$(this).text(d[i].shangwu)
				})
				$.each($('.yideng'), function(i) {
					$(this).text(d[i].yideng)
				})
				$.each($('.erdeng'), function(i) {
					$(this).text(d[i].erdeng)
				})
				$.each($('.gaojiruan'), function(i) {
					$(this).text(d[i].gaojiruan)
				})
				$.each($('.ruan'), function(i) {
					$(this).text(d[i].ruan)
				})
				$.each($('.yingwo'), function(i) {
					$(this).text(d[i].yingwo)
				})
				$.each($('.ruanzuo'), function(i) {
					$(this).text(d[i].ruanzuo)
				})
				$.each($('.yingzuo'), function(i) {
					$(this).text(d[i].yingzuo)
				})
				$.each($('.wuzuo'), function(i) {
					$(this).text(d[i].wuzuo)
				})
				
				$.each($('.head').children(),function(){
					$(this).css('text-align','center')
				})
			}
			
			function setval2(){
					$.each($('.shangwu'), function(i) {
					$(this).text(d[i].shangwu)
					})
					$.each($('.yideng'), function(i) {
					$(this).text(d[i].yideng)
					})
					$.each($('.erdeng'), function(i) {
					$(this).text(d[i].erdeng)
					})
					$.each($('.gaojiruan'), function(i) {
						$(this).text(d[i].gaojiruan)
					})
					$.each($('.ruan'), function(i) {
						$(this).text(d[i].ruan)
					})
					$.each($('.yingwo'), function(i) {
						$(this).text(d[i].yingwo)
					})
					$.each($('.ruanzuo'), function(i) {
						$(this).text(d[i].ruanzuo)
					})
					$.each($('.yingzuo'), function(i) {
						$(this).text(d[i].yingzuo)
					})
					$.each($('.wuzuo'), function(i) {
						$(this).text(d[i].wuzuo)
					})
			}

		});