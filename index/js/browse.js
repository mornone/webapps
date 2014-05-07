var Browse = (function(){

	var addCSS = (function(){
		$('body').append('<div class="browser"><a data-action="pre" href="javascript:;">上一个</a><a data-action="next" href="javascript:;">下一个</a></div>')
		$('<link>').attr({rel: 'stylesheet',type: 'text/css',href: '../css/browser.css'}).appendTo('head');
	})();

	var changeMenuListening = function(){
		$('div.browser').on('click','a',function(){
		var link = location.href,
			page = link.substring(link.indexOf('index/')+6,link.lastIndexOf('/')).split('-')[0],
			hrefs = '',
			action = $(this).data('action');
			if('basic' === page){
				hrefs = vers('basic','vip','standar',action);
			}
			if('standar' === page){
				hrefs = vers('standar','basic','vip',action);
			}
			if('vip' === page){
				hrefs = vers('vip','standar','standar',action);
			}
			
			location = hrefs;

		});
	};
	
	var vers = function(vers,pre,next,a){
		var link = location.href,
			page = link.substring(link.indexOf('index/')+6,link.lastIndexOf('/')).split('-'),
			beginp = 10,
			endp = 'vip-10',
			pname = page[0],pnum = parseInt(page[1]),
			hrefs = '',
			repStr = '',
			action = a;
			if(vers === pname){
				if(action == 'next'){
					if('vip' == pname && beginp == pnum){
						hrefs = link.replace(pname+'-'+beginp,'basic-1');
					}else{
						if(pnum == 10){
							hrefs = link.replace(pname+'-10',next+'-1');
						}else{
							repStr = pname+'-'+pnum;
							hrefs = link.replace(new RegExp(repStr,"g"),pname+'-'+(pnum+1));
						}
					}
				}else if(action == 'pre' && (pnum-1) > 0){
					repStr = pname+'-'+pnum;
					hrefs = link.replace(new RegExp(repStr,"g"),pname+'-'+(pnum-1));
					
				}else if(action == 'pre' && pnum == 1){
					if('basic' == pname && 1 == pnum){
						hrefs = link.replace(pname+'-1',endp);
					}else{
						hrefs = link.replace(pname+'-1',pre+'-10');
					}
				}
			}
			return hrefs;
	};
	var clickBodyhideListening = (function(){
		$('body').click(function(event) {
			$('div.browser').toggle();
		});
	})();
	changeMenuListening();
})();