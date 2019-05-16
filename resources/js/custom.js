$(document).ready(
	function(){

		$('#lform').hide();
		$('#registerForm').submit(function(event){
			event.preventDefault();
			const  myFormData = {
				username : $('#username').val(),
				address : $('#address').val(),
				password: $('#password').val()
			}


			$.ajax({

			// v1 is the version , users is the route in backend 
				url: 'http://localhost:3001/v1/users',
				method : 'POST',
				contentType: 'application/json',
				data: JSON.stringify(myFormData),

				success : function(result,status){
					console.log(result);
					console.log(status);
					$('#message').html(result.message)
					$('#rform').hide();
					$('#lform').show()
				// $('#message').html(result.message);
				// $('#lform').show();
				// $('#rform').hide();

				},
				error : function (jqXHR,status){ 

					console.log(jqXHR.responseJSON.message);
				$('#message').html(jqXHR.responseJSON.message);

				}

			})

		})




$('#loginForm').submit(function(event){
			event.preventDefault();
			const  myFormData = {
				username : $('#username').val(),
				password: $('#password').val()
			}


			$.ajax({

			// v1 is the version , users is the route in backend 
				url: 'http://localhost:3001/v1/auth',
				method : 'POST',
				contentType: 'application/json',
				data: JSON.stringify(myFormData),

				success : function(result,status){

					$('#message').html(result.message);
					window.location.href = "usersdashboard.html";


				},
				error : function (jqXHR,status){ 

				// 	console.log(jqXHR.responseJSON.message);
				$('#message').html(jqXHR.responseJSON.message);

				}

			})

		})


$('#getUsers').click(function(){

$.ajax({

			// v1 is the version , users is the route in backend 
				url: 'http://localhost:3001/v1/users',
				method : 'GET',
				contentType: 'application/json',
				dataType: 'json',
				success : function(result,status){
					// console.log(result);

					for (key in result ){
						// console.log(key);
						console.log(result[key].username);

$('#usersData')
.append('<li class="list-group-item">'
	+result[key].username+
	'</li><button type="button" class="btn btn-primary">Primary</button>')

					}

					// $('#message').html(result.message)

				},
				error : function (jqXHR,status){ 

				// 	console.log(jqXHR.responseJSON.message);
				// $('#message').html(jqXHR.responseJSON.message);

				}

			})

		})





})








// })