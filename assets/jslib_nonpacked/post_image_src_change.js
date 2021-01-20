var fnRenewImgSrc = function(is_log){
  var elems = document.querySelectorAll('img');
  if(is_log) console.log(elems);
  for(var idxElem = 0; idxElem < elems.length; idxElem++){
    var elem = elems[idxElem];
    var src_path = elem.getAttribute('src');
    if(src_path.startsWith("../")){
        src_path = src_path.substring(2);
        elem.setAttribute('src',src_path);
    }
    if(is_log) console.log(src_path);
  };
}
setTimeout(function(){
  fnRenewImgSrc(true); //for the fist time
  setInterval(function(){
    fnRenewImgSrc(false); //after that, when scrolls, image will be reloaded from time to time.
  }, 5000);
}, 1000);