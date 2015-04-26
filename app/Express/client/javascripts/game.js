var main = function () {
    "use strict";

    //$("h3").text("Loading...");
    
};

$(document).ready(main);

function postURL () {
    var name = document.getElementById("name").value;
    name = name.replace("/","-slashie-");
    //your code to be executed after 1 seconds
     
    var yourURL = function (myJson) {
        var obj = JSON.parse(myJson)
        
        $("p").html("Your URL: <a href='http://" + obj.shortURL + "' target='_blank'>" + obj.shortURL + "</a>");
    };
    $.post("/" + name, yourURL, 'json');
};
