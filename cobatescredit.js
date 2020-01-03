function redirect(){
 setTimeout(function() {
  window.location.assign(link);
 }, 3000);
}

if (!$(this).hasClass("test")) {
  $("html").html("<br/><center><b><h1>REDIRECTED</h1></b><br/><br/><h2>in 3 seconds...</h2></center>");
  redirect();
}
