function removeElement(_element){
	 var _parentElement = _element.parentNode;
	 if(_parentElement){
			_parentElement.removeChild(_element);
	 }
}
function goKefu(){
	var iframe;
	//如果已经存在框架
	if(iframe=document.getElementById('ifr')){
		removeElement(iframe);
	}
	try{  
	   iframe = document.createElement('<iframe name="ifr" id="ifr" src="tencent://message/?uin=1711729115&Site=ebadu&Menu=yes"></iframe>');  
	  }catch(e){ 
		iframe = document.createElement('iframe');  
		iframe.id = 'ifr'; 
		iframe.name='ifr'; 
	 	iframe.src="tencent://message/?uin=1711729115&Site=ebadu&Menu=yes";
	 }
	 document.body.appendChild(iframe);
}

function setCookie(name,value,time){
	var exp=new Date();
	exp.setTime(exp.getTime()+time*1000*60);
	document.cookie=name+"="+escape(value)+";expires="+exp.toGMTString();
}
function getCookie(name){
	var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
	if(arr=document.cookie.match(reg))return unescape(arr[2]);
	else return null
}
function delCookie(name){
	var exp=new Date();
	exp.setTime(exp.getTime()-1);
	var cval=getCookie(name);
	if(cval!=null)document.cookie=name+"="+cval+";expires="+exp.toGMTString();
}