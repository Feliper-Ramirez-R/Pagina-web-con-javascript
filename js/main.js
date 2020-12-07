$(document).ready(function(){
	//sliders


if(window.location.href.indexOf('index') > -1){
   $('.galeria').bxSlider({
    mode: 'fade',
    captions: true,
    slideWidth: 1200
   
   });

 }  

   //post
   //consultar como se hace de otra manera, para que en los otros html tambien cambie de color el fondo y los temas
   if(window.location.href.indexOf('index') > -1){ //esta condicion es para que me cargue cuando este dolo en el index
   var posts = [
        {
        	title:'Prueba de titulo 1',
        	date: 'Publicado el '+moment().format("dddd") +" "+ moment().day()+" de "+moment().format("MMMM")+ " del "+ moment().format("YYYY"),
        	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor massa nec est vulputate, eget viverra arcu sagittis. Nunc non neque hendrerit, commodo arcu ut, fermentum lacus. Mauris dapibus eu elit sit amet cursus. Maecenas efficitur quam orci, ac bibendum eros egestas eu. Nulla arcu arcu, mattis sit amet pellentesque sit amet, dapibus id tellus. Praesent sollicitudin dolor sit amet diam dignissim pellentesque et nec felis. Quisque efficitur, nisl nec pellentesque porttitor, mauris orci accumsan dui, nec porta velit tellus et tortor. Nullam interdum gravida lacus at fermentum.'
        },

        {
        	title:'Prueba de titulo 2',
        	date: 'Publicado el '+moment().format("dddd") +" "+ moment().day()+" de "+moment().format("MMMM")+ " del "+ moment().format("YYYY"),
        	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor massa nec est vulputate, eget viverra arcu sagittis. Nunc non neque hendrerit, commodo arcu ut, fermentum lacus. Mauris dapibus eu elit sit amet cursus. Maecenas efficitur quam orci, ac bibendum eros egestas eu. Nulla arcu arcu, mattis sit amet pellentesque sit amet, dapibus id tellus. Praesent sollicitudin dolor sit amet diam dignissim pellentesque et nec felis. Quisque efficitur, nisl nec pellentesque porttitor, mauris orci accumsan dui, nec porta velit tellus et tortor. Nullam interdum gravida lacus at fermentum.'
        },

        {
        	title:'Prueba de titulo 3',
        	date: new Date(),
        	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor massa nec est vulputate, eget viverra arcu sagittis. Nunc non neque hendrerit, commodo arcu ut, fermentum lacus. Mauris dapibus eu elit sit amet cursus. Maecenas efficitur quam orci, ac bibendum eros egestas eu. Nulla arcu arcu, mattis sit amet pellentesque sit amet, dapibus id tellus. Praesent sollicitudin dolor sit amet diam dignissim pellentesque et nec felis. Quisque efficitur, nisl nec pellentesque porttitor, mauris orci accumsan dui, nec porta velit tellus et tortor. Nullam interdum gravida lacus at fermentum.'
        },

        {
        	title:'Prueba de titulo 4',
        	date: new Date(),
        	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor massa nec est vulputate, eget viverra arcu sagittis. Nunc non neque hendrerit, commodo arcu ut, fermentum lacus. Mauris dapibus eu elit sit amet cursus. Maecenas efficitur quam orci, ac bibendum eros egestas eu. Nulla arcu arcu, mattis sit amet pellentesque sit amet, dapibus id tellus. Praesent sollicitudin dolor sit amet diam dignissim pellentesque et nec felis. Quisque efficitur, nisl nec pellentesque porttitor, mauris orci accumsan dui, nec porta velit tellus et tortor. Nullam interdum gravida lacus at fermentum.'
        },

        {
        	title:'Prueba de titulo 5',
        	date: new Date(),
        	content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas porttitor massa nec est vulputate, eget viverra arcu sagittis. Nunc non neque hendrerit, commodo arcu ut, fermentum lacus. Mauris dapibus eu elit sit amet cursus. Maecenas efficitur quam orci, ac bibendum eros egestas eu. Nulla arcu arcu, mattis sit amet pellentesque sit amet, dapibus id tellus. Praesent sollicitudin dolor sit amet diam dignissim pellentesque et nec felis. Quisque efficitur, nisl nec pellentesque porttitor, mauris orci accumsan dui, nec porta velit tellus et tortor. Nullam interdum gravida lacus at fermentum.'
        }

   ]

   console.log(posts);

   posts.forEach((item, index) =>{
   	var post = `
    <article class = "post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>
           ${item.content}
        </p>
        <a href="#" class="button_more">Leer mas</a>
    </article>

   	`;

  $("#posts").append(post);

    }); 

}


    var theme = $("#theme");

   $("#to_green").click(function(){
	   theme.attr("href", "css/green.css");
    });

    $("#to_red").click(function(){
	   theme.attr("href", "css/red.css");
    });

     $("#to_blue").click(function(){
	   theme.attr("href", "css/blue.css");
    });

     $("#to_yellow").click(function(){
	   theme.attr("href", "css/yellow.css");
    });

     //scroll arriba de la web

     $('.subir').click(function(e){
     	e.preventDefault();
        $('html, body').animate({
        	scrollTop: 0
        }, 500);

        return false;
     });

     //login falso

     $("#login form").submit(function(){
         var form_name = $("#form_name").val();
         localStorage.setItem("form_name", form_name);
     });

     var form_name = localStorage.getItem("form_name");

     if(form_name!= null && form_name!="undefined"){
     	var about_parrafo = $("#about p");
     	about_parrafo.html("<br><strong>Bienvenido, "+form_name+"</strong> ");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");
     	$("#login").hide();


     	$("#logout").click(function(){
             localStorage.clear();
             location.reload();
     	});
     }
          
          //acordeon
      if(window.location.href.indexOf('about') > -1){ // y esta condicion me va a cargar solo lo de la pagina about

        $("#acordeon").accordion();
      }


      //reloj

       if(window.location.href.indexOf('reloj') > -1){

       	setInterval(function(){
       		var reloj = moment().format("hh:mm:ss")
           $('#reloj').html(reloj);
       }, 1000)
           
       }

       // validacion de formulario
       if(window.location.href.indexOf('contact') > -1){
          //poner un calendario al campo del formulario que tenga que agregar una fecha
       	$("form input[name='date']").datepicker({
       		dateFormat:'dd-mm-yy'
       	});

		       $.validate({
		    lang: 'es'
		   });
		 }
       var facebook = document.querySelector("#facebook");
       facebook.href = "https://www.facebook.com/felipe.ramirezrestrepo";
       
        var instagram = document.querySelector("#instagram");
       instagram.href = "https://www.instagram.com/pipe_ramirezre/?hl=es-la";
});



