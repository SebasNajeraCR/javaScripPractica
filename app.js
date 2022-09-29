$(document).ready(function(){
	console.log("hola mundo")
	$("#eje1").html("Benvenute")
	$("h2:last").html("CACHETE")
	$(".P3").addClass("P1")
	$(".P3").removeClass("P1")
	$(".Contenedor2").append("<h1>Lorem ipsum dolor sit amet consectetur adipisicing, elit. Voluptatibus blanditiis soluta ipsam quam labore atque libero id quaerat magni, nobis incidunt, ullam. Impedit hic eveniet repudiandae rem molestias doloremque, cupiditate?</h1>")
	$(".eliminado").prepend("<h1> YO SOY EL DEL INICIO</h1>")
	$(".segundo").css({
		color: "hotpink",
		fontSize: 100
	})
})
