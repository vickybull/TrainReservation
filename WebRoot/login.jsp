<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
	String path = request.getContextPath();
	String basePath = request.getScheme() + "://"
			+ request.getServerName() + ":" + request.getServerPort()
			+ path + "/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
<head>
<meta charset="utf-8">
<!--手机自适应<meta name="viewport" content="width=device,initial-scale=1.0">-->
<title>火车票登录</title>
<link rel="stylesheet" type="text/css" href="css/style.css">
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/comm.js"></script>
</head>
<body>
	<!--head-->
	<div class="header">
		<div class="inner">
			<div class="logo">
				<a href="index.html" title="火车票"><img src="images/t.jpg"
					width="350" height="60" />
				</a>
			</div>
			<div class="headlink">
				<a href="index.html">网站导航</a> &nbsp;|&nbsp; <a href="login.jsp"
					style="border-bottom:2px solid #09F">基本版</a> &nbsp;|&nbsp; <a
					href="English.html">English</a>


			</div>
		</div>
	</div>
	<!--head end-->
	<!--banner-->
	<div class="middle">
		<div class="cont">
			<div class="banner">
				<img src="images/tr.png" width="860" height="400"
					style="opacity:0.3" />
			</div>
			<div class="loginbox">

				<div class="head">
					<a class="left" href="###">快速登录</a> <a class="right sel" href="###">账号密码登录</a>
					<div class="bottomline"></div>
				</div>

				<div class="ct">
					<div class="item" id="itme">
						<!--关闭记录 autocomplete="off"-->
						<form method="post" action="" name="myform" onsubmit="checkpost()">
							<div class="input">
								<label for="name">手机号</label><input placeholder="可用作登录名"
									autocomplete="off" type="text" />
							</div>
							<div class="input">
								<label for="pw">验证码</label><input placeholder="动态密码"
									type="password" /> <br />
							</div>
							<div class="input">
								<label></label> <input type="submit" class="submit"
									style="width:220px;" autocomplete="off" value="登录" />
							</div>
						</form>
					</div>
					<div class="item">
						<div class="logintip"></div>
						<div class="inputbox">
							<input name="username" autocomplete="off" placeholder="手机号" />
							<a href="javascript:void(0)" class="delusername"></a>
						</div>
						<div class="inputbox">
							<input name="password" type="password" placeholder="密码" />
						</div>
						<div class="outbox">
							<div class="checkbox">
								<input type="checkbox" />
							</div>
							下次登录
						</div>

						<div class="submitBtn">
							<input type="submit" value="登 录" />
						</div>
						<div style="margin-top:20px;">
							<a href="zhuce.html">立即注册</a> <a href="#" style="float:right;">忘记密码？</a>
						</div>

					</div>
				</div>
			</div>
		</div>
	</div>
	<!--banner end-->

</body>
</html>

