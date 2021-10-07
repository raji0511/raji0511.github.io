console.log("hii");
var flag;

document.getElementById("loginBtn").onclick = function(){
    console.log("clicked");
    var name = document.getElementById("username").value ;
    var password = document.getElementById("password").value ;
    console.log(name +" "+ password);
   


    if(name && password) {
        // digitalData.userInfo.loginStatus = "true";
        // digitalData.userInfo.username = name;
        localStorage.setItem("username", name);
        localStorage.setItem("loginStatus", "true")
        window.location.href = "index.html"

      
    }


}
  
