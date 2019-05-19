$(document).ready(function() {
	var uid;
	$('#editUserr').submit(function(e) {


		e.preventDefault();

		var editData = {
			username: $('#username').val(),
			address: $('#address').val()
		}

		$.ajax({

			url: 'http://localhost:3001/v1/users/' + uid, // here uid has already been set to actual userid in previous funciton when edit is clicked, since uid is global
			method: "PUT",
			contentType: 'application/json',
			dataType: 'json',
			data:JSON.stringify(editData),
			success: function(result) {
				console.log(result)
				// your logic here , redirect to another page or show message etc
			},
			error: function() {

			}

		})

	})

	$('#usersList').on('click', '#edit', function() {
		//this is the userid 
		uid = $(this)[0].attributes.uid.nodeValue;

		$.ajax({

			url: 'http://localhost:3001/v1/users/' + uid,
			method: 'GET',
			dataType: 'json',
			success: function(result) {
				console.log(result.username)
				$('#username').val(result.username)
				$('#address').val(result.address)


			},
			error: function() {

			}
		})


	})

	$('#usersList').on('click', '#delete', function() {

		console.log('delete pressed');
		console.log($(this)[0].attributes.uid.nodeValue);
		// console.log($(this));
		uid = $(this)[0].attributes.uid.nodeValue;
		var isDelete = confirm("Are your sure ? ");

		if (isDelete == true) {
			$.ajax({

				url: 'http://localhost:3001/v1/users/' + uid,
				method: 'delete',
				dataType: 'json',
				success: function() {
					window.location.href = "usersdashboard.html";

				},
				error: function() {

				}
			})

		} else { // handle else 

		}

	})

	$.ajax({


		url: 'http://localhost:3001/v1/users/',
		method: 'GET',
		dataType: 'json',
		success: function(result, status) {
			console.log(result);

			for (key in result) {

				// console.log(result[key].username)

				$('#usersList').append('<tr> ]\
      <th scope="row">1</th> \
      <td>' + result[key].username + '</td> \
      <td>' + result[key].address + '</td> \
      <td><button type="button" uid="' + result[key].id + '" data-toggle="modal" data-target="#exampleModal" \
	id="edit"  class="btn btn-primary">Edit</button></td>\
      <td><button type="button" uid="' + result[key].id + '"  id="delete" class="btn btn-danger">Delete</button></td>\
    </tr>')
			}
		},
		error: function(jqXHR, status) {

		}


	})



})