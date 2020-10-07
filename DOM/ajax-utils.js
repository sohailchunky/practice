(function (global) {
	var ajaxUtils = {};

	function getRequestObject()
	{
		if(window.XMLHttpRequest){
			return(new XMLHttpRequest());
		}
		else if (window.ActiveXObject)
		{
			return(new ActiveXObject("Microsoft.XMLHTTP"));		
		}
		else {
			global.alert("Ajax is not supported!");
			return(null);
		}
		}

		ajaxUtils.send
	}

})