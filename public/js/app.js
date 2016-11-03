var plantilla = "<div>"+
	    "<p><strong>Nombre:</strong>__nombre__</p>"+
	    "<p><strong>Apellido:</strong>__apellido__</p>"+
	    "<p><strong>Edad:</strong>__edad__</p>"+
	    "<p><strong>FechaNacimiento:</strong>__fechaNacimiento__</p>"+
	    "<p><strong>Email:</strong>__email__</p>"+
	"</div>";

$(document).ready(function(){
	$.ajax({
		url:"http://localhost:1234/demo.json",
		type: "GET",
		success: function(response){
			$("#datos").html(plantilla
				.replace("__nombre__", response.nombre)
				.replace("__apellido__", response.apellido)
				.replace("__edad__", response.edad)
				.replace("__email__", response.email)
				.replace("__fachaNac__", response.fechaNacimiento));
			var hobbies = "<ul>";
			for (var i = 0, l = response.hobbies.length; i < l; i++){
				hobbies += "<li>" + response.hobbies[i] + "</li>";
			}
			hobbies += "</ul>";
			$("#hobbies").html(hobbies);
		},
		/*error: function(error){
			console.log(error);
		}*/
	})
})