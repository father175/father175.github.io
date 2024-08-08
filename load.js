var url=""
var json
var cache={}
async function load(file){
	if (navigator.onLine) {
		var web="Page was not found"
		await fetch("https://father175.github.io/"+file)
			.then(response => {
				if (!response.ok) {
				  throw new Error('Network response was not ok ' + response.statusText);
				}
				return response.text();
			  })
			  .then(html => {
				 web=html;
			  })
			  .catch(error => {
				console.log('There has been a problem with your fetch operation:', error);
			  });
		if(web!="Page was not found"){
			cache[file]=web;
		}
		return web;
	}else{
		if(cache[web]!=undefined){
			return cache[web];
		}
		alert('Network response was not ok');
	}
}
function url_find(obj) { 
    const parts = url.split('+');  
    let current = obj; 
    for (var part=1;part<parts.length;part+=1) { 
        current = current[parts[part]];
    } 
    return current; // 返回最终找到的值，可能是嵌套对象、数组、基本类型或undefined  
}  
function appear(what){
	var div = document.getElementById("guide");
	while(true){
		var element = document.getElementById("chi");
		if (div && div.contains(element)) {  
			div.removeChild(element);
		}else{
			break;
		}
	}
	document.getElementById("a_1").innerHTML="cache"+url;
	for(var key in what){
		if(json[key]=='[object Object]'){
			document.getElementById("guide").insertAdjacentHTML('beforeend','<br id="chi"><a id="chi" onclick="into(\''+key+'\')">'+key+'(文件夹)</a>');
		}else{
			document.getElementById("guide").insertAdjacentHTML('beforeend','<br id="chi"><a id="chi" onclick="review(\''+key+'\')">'+key+'(文件)</a>');
		}
	}
}
function review(file){
	var resule;
	load(url+"+"+file).then(web => {
		resule=web
	});
	document.getElementById("text").innerHTML=resule;
}
function into(sock){
	url=url+"+"+sock;
	appear(url_find(json))
}
function init(){
	load("root.json").then(web => {
		json=web
	});
//	json='{"使用说明.txt":"","大数据修仙":{"第一章 谁在渡劫.txt":"","第二章 真去握草了.txt":"","第三章 奇遇嘛，最大了.txt":"","第四章 社会你红姐.txt":"","第五章 牧草种得不错.txt":"","第六章 有点小磕绊.txt":"","第七章 神秘空间.txt":""}}'
	json=JSON.parse(json)
	appear(url_find(json))
}