(function ( $ ) {

	function body_parser(){
		$('body')
            .addClass('x-uplift-js');
	}




	//Add unique parser name
	//avoid name collision with other parsers
    var extensionParsers = {
    	'body_parser': body_parser
    };



    //Don't touch this

	var _scb = $.scb;
    $.extend(true, uplift.parsers, extensionParsers);


}( jQuery ));
