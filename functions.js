
$(document).ready(function(){

    $(".right").css("display", "block");

    $(".settings-button").click(function(){
         if ($(".right").css("display") == "none") {
             $( ".right" ).show( "fast", function() {
                 $(this);
             });
         } else {
             $( ".right" ).hide( "fast", function() {
                 $(this);
             });
         }
     });

    let conets = new Array();

    conects = [
        "Sorel",
        "Monica",
        "Diego Bautista",
        "Juan Duarte",
        "Johan Duarte",
        "Diego Pineda",
        "Sergio Garrido",
        "Ciro Garrido",
        "Kevin Quiñones",
        "Esteban Avila",
        "Kevin Villamizar",
        "Brayan Malaver",
        "Johan Amado",
        "Fabian Leon",
        "Gerson Navarro",
        "Cristian Serrano",
        "Julian Rodriguez",
        "Jhonathan Avila"
    ];
    let html = "";
    conects.forEach(name => {
        html += $(".card-element").find("#created_by_name").text(name);
        html.appendTo("#main_container");
    });

    
});


