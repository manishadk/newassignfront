$(document).ready(function(){
	var uid ;

$('#usersList').on('click', '#delete', function(){

console.log('delete pressed');
console.log($(this)[0].attributes.uid.nodeValue);
// console.log($(this));
uid = $(this)[0].attributes.uid.nodeValue

$.ajax({

	url:'http://localhost:3001/v1/users/'+uid,
	method:'delete',
	dataType:'json',
	success: function(){

					window.location.href = "usersdashboard.html";


	},
	error: function(){

	}
})


$('#usersList').on('click', '#edit', function(){

console.log($(this)[0].attributes.uid.nodeValue);
uid = $(this)[0].attributes.uid.nodeValue

$.ajax({

	url:'http://localhost:3001/v1/users/'+uid,
	method:'put',
	dataType:'json',
	success: function(){

					// window.location.href = "usersdashboard.html";


	},
	error: function(){

	}
})








})

$.ajax({


url: 'http://localhost:3001/v1/users/',
method:'GET',
dataType: 'json',
success : function (result,status){
console.log(result);

for (key in result){

	// console.log(result[key].username)

	$('#usersList').append('<tr> ]\
      <th scope="row">1</th> \
      <td>'+result[key].username+'</td> \
      <td>'+result[key].address+'</td> \
      <td><button type="button" uid="'+result[key].id+'" id="edit" class="btn btn-primary">Edit</button></td>\
      <td><button type="button" uid="'+result[key].id+'"  id="delete" class="btn btn-danger">Delete</button></td>\
    </tr>')
}










},
error : function(jqXHR,status){

}


})









})