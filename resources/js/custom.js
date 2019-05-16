$(document).ready(
function(){

	$("#register").submit(function(event){
		event.preventDefault();

		var myFormData ={

			username : $('#username').val(),
			password : $('#passwrod').val()
		}

		
	})
 
$.ajax({

	//v1 is the version and users is the route 
	url: 'http://localhost:3001/v1/users'
	method : 'POST',
	contentType: 'application/json',
	data: JSON.stringify(myFormData),


	success : function(result, status){

	}

	error: function(jqXHR, status){

	}

})


}

	)