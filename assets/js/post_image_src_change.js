var elems = document.querySelectorAll('img');
  console.log(elems);
  elems.forEach(function(elem){
    var src_path = elem.getAttribute('src');
    if(src_path.startsWith("../")){
        src_path = src_path.substring(2); //rems prepending '..'
        elem.setAttribute('src',src_path);
    }
    console.log(src_path);
  });