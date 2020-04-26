javascript:;
var post = document.getElementsByClassName('PdwC2 fXiEu s2MYR');
var sequence = document.getElementsByClassName('Ckrof');
var next = document.getElementsByClassName('coreSpriteRightChevron')[0];
var arr = [];
if(post.length==1){
	if(sequence[0]){
		if(sequence[0].getElementsByClassName('tWeCl')[0]){
			arr.push(sequence[0].getElementsByClassName('tWeCl')[0].src);
		}else{
			arr.push(sequence[0].getElementsByClassName('FFVAD')[0].src);
		}
	}else{
		if(document.getElementsByClassName('tWeCl')[0]){
			arr.push(document.getElementsByClassName('tWeCl')[0].src);
		}else{
			arr.push(post[0].getElementsByClassName('FFVAD')[0].src);
		}
	}
	try{
		next.click();
	}catch(e){}
	var iv = setInterval(function(){
		try{
			if(sequence[1].getElementsByClassName('tWeCl')[0]){
				arr.push(sequence[1].getElementsByClassName('tWeCl')[0].src);
			}else{
				arr.push(sequence[1].getElementsByClassName('FFVAD')[0].src);
			}
			document.getElementsByClassName('coreSpriteRightChevron')[0].click();
		}catch(e){
			arr.forEach(function(each){
				open(each);
			});
			clearInterval(iv);
			document.getElementsByClassName('_65Bje  coreSpriteRightPaginationArrow')[0].click();
		}
	}, 500);
}else{
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
