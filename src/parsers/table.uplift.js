(function ( $ ) {

	function table_parser(){
		$('table.x-form')
            .addClass('x-uplift-js')
            .after('This element was modified');
	}




	//Add unique parser name
	//avoid name collision with other parsers
    var extensionParsers = {
    	'table_parser': table_parser
    };



    //Don't touch this

	var _scb = $.scb;
    $.extend(true, uplift.parsers, extensionParsers);


}( jQuery ));
