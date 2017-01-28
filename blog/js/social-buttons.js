$(document).ready(function() {
	var title = $("h1").text();
	var url = window.location.href;
	var url_enc = encodeURIComponent(url);
	var message = "Look at this great article that I found! - ";
	
	var linkedin = "https://www.linkedin.com/shareArticle?mini=true&url=";
	linkedin += url_enc; 
	linkedin += "&title=" + title;
	linkedin += "&summary=" + message;
	linkedin += "&source=BrokerTemplates";
	
	var tweet = "https://twitter.com/intent/tweet";
	tweet += "?url=" + url_enc;
	tweet += "&text=" + message + title;
	tweet += "&via=BrokerTemplates"
	
	var facebook = "https://www.facebook.com/sharer.php?u=";
	facebook += url_enc;
	
	$(".twitter").attr("href", tweet);
	$(".linkedin").attr("href", linkedin);
	$(".facebook").attr("href", facebook);
});
