(function ( $ ) {
    $.uplift = {
    	parsers:{},
    	transform: function(){

    		$.each(this.parsers, function(index, value) {
			    if(typeof value == "function"){
			    	value.call();
			    }
			});
    	}
    };
}( jQuery ));
