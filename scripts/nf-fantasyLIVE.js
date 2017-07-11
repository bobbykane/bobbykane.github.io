function removeFadeIn() {
    setTimeout(function(){
        $("section.main .plays").removeClass("fadeIn");
    }, 600);
}

$("a.Plays-YourLeaguesAll, a.Plays-YourLeaguesSpecific, a.Plays-ShowOpp, a.Right-SpecificTeam, a.Right-SpecificTeamExpanded, a.Right-BacktoLeagues, a.LeagueSettings, a.ImportLeaguesMiddle, a.FanDuel").css("display","none");

$("a.Plays-YourLeaguesNone").click(function(){
    $("section.main .plays").attr("class", " ").addClass("plays YourLeaguesNone fadeIn");
    removeFadeIn();
    $("a.ImportLeaguesMiddle").css("display", "block");
});

$("a.Plays-YourLeaguesAll").click(function(){
    $("section.main .plays").attr("class", " ").addClass("plays YourLeaguesAllMatchups fadeIn");
    removeFadeIn();
    $("a.Plays-YourLeaguesSpecific, a.Plays-ShowOpp").css("display", "block");
});

$("a.Plays-YourLeaguesSpecific").click(function(){
    $("section.main .plays").attr("class", " "). addClass("plays YourLeaguesSpecific fadeIn");
    $("a.Plays-ShowOpp").css("display", "none");
});

$("a.Plays-ShowOpp").click(function(){
    $("section.main .plays").attr("class", "plays YourLeaguesOpp");
});

$("a.ImportLeagues, a.ImportLeaguesMiddle").click(function(){
    $(".importModal").attr("class", "importModal show default fadeIn");
    $(".overlay").addClass("show fadeIn");
});

$("a.LeagueSettings").click(function(){
    $(".importModal").attr("class", "importModal show finishedYahoo fadeIn");
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

$(".importModal a.finishYahoo").click(function(){
    $(".importModal").attr("class", "importModal show finishedYahoo");
    var loggedIn = true;

    if ( loggedIn === true ) {
        $("section.main .leagues").addClass("loggedIn");
        $("a.ImportLeagues, a.ImportLeaguesMiddle, a.Plays-YourLeaguesNone").remove();
        $("section.main .plays").addClass("YourLeaguesAllMatchups");
        $("a.Plays-YourLeaguesAll, a.Plays-YourLeaguesSpecific, a.Plays-ShowOpp, a.Right-SpecificTeam, a.LeagueSettings, a.FanDuel").css("display","block");

    }
});

$("a.FanDuel").click(function(){
    $(".importModal").attr("class", "importModal show fd");
    $("a.importYahooButton, a.finishYahoo").css("display", "none");
});

$("a.Plays-AllNFL").click(function(){
    $("a.ImportLeaguesMiddle").css("display", "none");
    $("section.main .plays").attr("class", " ").addClass("plays AllNFL fadeIn");
    if ( !(loggedIn == 'null') ) {
        $("a.Plays-YourLeaguesSpecific, a.Plays-ShowOpp").css("display","none");
    }
    removeFadeIn();
});

$("a.Right-SpecificTeam").click(function(){
    $("section.main .leagues").attr("class", "leagues specific");
    $("a.Right-SpecificTeam").css("display", "none");
    $("a.Right-BacktoLeagues, a.Right-SpecificTeamExpanded").css("display", "block");
});

$("a.Right-SpecificTeamExpanded").click(function(){
    $("section.main .leagues").toggleClass("specificExpanded");
});

$("a.Right-BacktoLeagues").click(function(){
    $("section.main .leagues").attr("class", "leagues loggedIn");
    $("a.Right-SpecificTeam").css("display", "block");
    $("a.Right-BacktoLeagues, a.Right-SpecificTeamExpanded").css("display", "none");
});