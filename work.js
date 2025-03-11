function BKHash(str) {
    let hash = 0,seed=3131;
    for (let i = 0; i < str.length; i++) {
        hash = hash * seed + str.charCodeAt(i);
    }
    return hash.toString();
}
function check(){
	var name=document.getElementById("name");
	var password=document.getElementById("password");
	if(BKHash(name.value)==password.value){
		document.getElementById("login").style.display = "none";
		document.getElementById("main").style.display = "block";
	}else alert("密码或用户名错误！");
}