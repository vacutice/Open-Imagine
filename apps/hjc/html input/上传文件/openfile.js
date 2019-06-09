$(function(){
  $("body a").on("change","input[type='file']",function(){
    var filePath=$(this).val();
    $(".fullPath").html("全路径："+filePath);
    if(filePath.indexOf("jpg")!=-1 || filePath.indexOf("png")!=-1){
      $(".fileerrorTip").html("").hide();
      var arr=filePath.split('\\');
      var fileName=arr[arr.length-1];
      $(".showFileName").html("文件名："+fileName);
    }else{
      $(".showFileName").html("");
      $(".fileerrorTip").html("非jpg,png格式：您未上传文件，或者您上传文件类型有误！").show();
      return false
    }
  });
})
