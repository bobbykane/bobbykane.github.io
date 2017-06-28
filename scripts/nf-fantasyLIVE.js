function removeFadeIn() {
    setTimeout(function(){
        $("section.main .plays").removeClass("fadeIn");
    }, 600);
}

$("a.Plays-YourLeaguesAll, a.Plays-YourLeaguesSpecific").css("display","none");

$("a.Plays-YourLeaguesNone").click(function(){
    $("section.main .plays").attr("class", " ").addClass("plays YourLeaguesNone fadeIn");
    removeFadeIn();
});

$("a.Plays-YourLeaguesAll").click(function(){
    $("section.main .plays").attr("class", " ").addClass("plays YourLeaguesAllMatchups fadeIn");
    removeFadeIn();
    $("a.Plays-YourLeaguesSpecific").css("display", "block");
});

$("a.Plays-AllNFL").click(function(){
    $("section.main .plays").attr("class", " ").addClass("plays AllNFL fadeIn");
    removeFadeIn();
});

$("a.Plays-YourLeaguesSpecific").click(function(){
    $("section.main .plays").attr("class", " "). addClass("plays YourLeaguesSpecific fadeIn");
});

$("a.ImportLeagues").click(function(){
    $(".importModal").attr("class", "importModal show default fadeIn");
    $(".overlay").addClass("show fadeIn");
});

$(".importModal a.close").click(function(){
    $(".importModal").removeClass("show default fadeIn");
    $(".overlay").removeClass("show fadeIn");
});

$(".importModal a.importYahooButton").click(function(){
    $(".importModal").attr("class", "importModal show logInYahoo");
});

var loggedIn = null;
console.log(loggedIn);

$(".importModal a.finishYahoo").click(function(){
    $(".importModal").attr("class", "importModal show finishedYahoo");
    var loggedIn = true;

    if ( loggedIn === true ) {
        $("section.main .leagues").addClass("loggedIn");
        $("a.ImportLeagues, a.Plays-YourLeaguesNone").remove();
        $("section.main .plays").addClass("YourLeaguesAllMatchups");
        $("a.Plays-YourLeaguesAll").css("display","block");

    }
});