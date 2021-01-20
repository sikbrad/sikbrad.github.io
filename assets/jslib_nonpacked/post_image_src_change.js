var elems = document.querySelectorAll('img');
  console.log(elems);
  for(var idxElem = 0; idxElem < elems.length; idxElem++){
    var elem = elems[idxElem];
    var src_path = elem.getAttribute('src');
    if(src_path.startsWith("../")){
        src_path = src_path.substring(2);
        elem.setAttribute('src',src_path);
    }
    console.log(src_path);
  };