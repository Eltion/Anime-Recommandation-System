
var server =  "";

function main() {

    getServerIp(function(url) {
        console.log("Url e serverit: ",url);
        server = url;
        //search("Naruto")    
    });

    


    $("#rec").on("click", function(){
        $('#animelist').empty();
        search2($("#search").val());
    });
    

    $("#search").keypress(function (e){
        if(e.keyCode == 13){
            $('#animelist').empty();
            search2($("#search").val());
        }
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

function search1(key){
    console.log("Kerko: ", key);
    getRecByUserId( key, function (data){
        console.log("Resultati: ", data)
        addToList(data)
    });
}


function search2(key){
    console.log("Kerko: ", key);
    getRecDes( key, function (data){
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
        var x = `<li><div class="item"> <div><img src="${element.img.replace("myanimelist.cdn-dena.com","cdn.myanimelist.net")}"></div><div>${element.title }</div></div></li>`;
        e.innerHTML += x;
    });
}

function getRecByAnime( input, callback){
    console.log("Kerkese ne server: ",server+"/anime?anime="+input);
    $.getJSON(server+"/anime?anime="+input, function (data) {
        callback(data)
    });
}    

function getRecByUserId( input, callback){
    console.log("Kerkese ne server: ",server+"/model?id="+input);
    $.getJSON(server+"/model?id="+input, function (data) {
        callback(data)
    });
}

function getRecDes( input, callback){
    console.log("Kerkese ne server: ",server+"/tfidf?anime="+input);
    $.getJSON(server+"/tfidf?anime="+input, function (data) {
        callback(data)
    });
}

window.onload = main;