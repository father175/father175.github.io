function BKHash(str) {
    let hash = 0,seed=31;
    for (let i = 0; i < str.length; i++) {
        hash = hash * seed + str.charCodeAt(i);
		hash%=16777216;
    }
    return hash.toString(16);
}
window.onload = function() {
	var self=document.cookie.split(";");
	self=self[0].split(",");
	if(BKHash("username is "+self[0])==self[1]){
		alert("自动登录成功");
	}
};
function check(){
	var name=document.getElementById("name");
	var password=document.getElementById("password");
	if(BKHash("username is "+name.value)==password.value){
		document.cookie = name.value+","+password.value+"; path=/";
		document.getElementById("login").style.display = "none";
		document.getElementById("main").style.display = "block";
	}else alert("密码或用户名错误！");
}
function get_into(x){
	if(x==0){
		document.getElementById("main").style.display = "none";
		document.getElementById("chat").style.display = "block";	
	}
	if(x==1){
		document.getElementById("main").style.display = "none";
		document.getElementById("file").style.display = "block";	
	}
	if(x==2){
		document.getElementById("main").style.display = "none";
		document.getElementById("game").style.display = "block";	
	}
}
