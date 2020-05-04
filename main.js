
var server =  "";

function main() {

    getServerIp(function(url) {
        console.log("Url e serverit: ",url);
        server = url;
    });




    $("#rec").on("click", function(){
        search($("#search").val());
    });
    


//    getRecByAnime( "Naruto",function (data){
//        addToList(data)
//    })
}

function search(key){
    console.log("Kerko: ", key);
    getRecByAnime( key, function (data){
        console.log("Resultati: ", data)
        addToList(data)
    });
}

function getServerIp( callback ){
    $.getJSON("serverUrl.php?url1", function(data){
        callback(data.url)
    })
}


function addToList(data){
    var e  = document.getElementById("animelist");
    data.forEach(element => {
        var x = `<li> <img src="${element.img.replace("myanimelist.cdn-dena.com","cdn.myanimelist.net")}"> <span>${element.movie}</span> </li>`;
        e.innerHTML += x;
    });
}

function getRecByAnime( input, callback){
    $.getJSON(server+"/anime?anime="+input, function (data, textStatus, jqXHR) {
        callback(data)
    }
);
}

window.onload = main;