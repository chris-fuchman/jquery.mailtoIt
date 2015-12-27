/*
 * name: MailtoIt
 *
 * version: 0.1.0
 *
 */ 

$(function($){
	
	$.fn.mailtoIt = function(options){
	
		// def settings
		var settings = $.extend({
			mailto: null,
			text: null
			
		},options);
		
		//console.log(this.html());	
		//console.log(settings.whatever);	
		
		// validation
		if(settings.mailto==null) console.log('Missing mailto option');
		
		return this.each(function(){
		
			var object=$(this);
			if(settings.text==null) settings.text=object.text();	

			object.wrap('<a href="mailto:'+settings.mailto+'"></a>').text(settings.text);
			
		});
		
		
	}
	
}(jQuery)); 