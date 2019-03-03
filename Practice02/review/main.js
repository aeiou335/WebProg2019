//formal
var a="img_viewer_begin/images/pizza01.jpg";
var b ="img_viewer_begin/images/2.png";
var c="img_viewer_begin/images/3.jpg";
var d="img_viewer_begin/images/4.jpg";
var e="https://scontent.ftpe4-1.fna.fbcdn.net/v/t1.0-9/53529168_2220524988007694_8591042118036750336_o.jpg?_nc_cat=101&_nc_ht=scontent.ftpe4-1.fna&oh=7c5f22c5c208104c9345f4a74d13f123&oe=5D1ECB17";
var count=0
var image = [a,b,c,d,e];
window.addEventListener("load",function(){
    var loadscreen=document.getElementById("loadscreen");
    document.body.removeChild(loadscreen);
});
function rshift(){
    document.getElementById("sh1").src="img_viewer_begin/images/back.png";
   
if (count===image.length-2){
    document.getElementById("sh3").src="img_viewer_begin/images/forbit.jpg";

}
if(count===image.length-1){
    
    a.disabled=true;
}
   var a= document.getElementById("sh2");
   
   a.src=image[count+1];
   
 count++
 
 
} 
function lshift(){
    document.getElementById("sh3").src="img_viewer_begin/images/next.png";

    if (count===1){
        document.getElementById("sh1").src="img_viewer_begin/images/forbit.jpg";
    
    }
   
     if (count===0){
         
        a.disabled=true; 
        } 
              
    var a= document.getElementById("sh2");
    a.src=image[count-1];
    count--; 
 } 



    
 
