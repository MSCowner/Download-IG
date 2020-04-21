javascript:;
var post = document.getElementsByClassName('PdwC2 fXiEu s2MYR');

// check if you open a post
if(post.length==1){
  var point = document.getElementsByClassName('Yi5aA');

  // check whether the post have multiple medias
  // if a post have one or two media(s)
  if(point.length==2||!point.length){

    // get each link of the medias and open them
    Array.from(post[0].getElementsByClassName('FFVAD')).forEach(function(img){
      open(img.src);
    });
    Array.from(post[0].getElementsByClassName('tWeCl')).forEach(function(v){
      open(v.src);
    });

  // if the post have three or more medias
  // open the other site to download them
  }else if(point.length>2){
    var dummy = document.createElement('input'),
    text = window.location.href;

    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand('copy');
    document.body.removeChild(dummy);
    window.open("https://www.instapick.net/");
    }

  // change to next post
  document.getElementsByClassName('_65Bje  coreSpriteRightPaginationArrow')[0].click();

// the post doesn't exist
// assume there's a window with media you just opened
}else{  
  
  // create a link and donwload
  var link = document.createElement('a');
  link.download = '';
  try{
    link.href = document.getElementsByTagName('img')[0].src;
  }catch(e){
    link.href = document.getElementsByTagName('video')[0].src;
  }
  link.click();
  window.close();
}
