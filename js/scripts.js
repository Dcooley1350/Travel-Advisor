$(document).ready(function()  {
  $("#survey form").submit(function(event)  {
    event.preventDefault();

    var userName = $("input#firstName").val();
    var userGender = $("#gender").val();
    var userCityOrRural = $("#cityORrural").val();
    var userClothing = $("#season").val();
    var userWater = $("input:radio[name=water-type]:checked").val();
    
    $(".firstName").text(userName)

    if (userClothing === "1") {
      var season = "Winter"
    } else {
      var season = "Summer"
    }
    $(".season").text(season);

    if (userGender === "Male?") {
      var prefix = "Mr.";
    } else if (userGender === "Female?") {
      var prefix = "Miss";
    } else if (userGender === "I prefer not to identify. We are all people!") {
      var prefix = "Non-Demoninational Person"
    }
    $(".gender").text(prefix);


    if (userCityOrRural === "3" && userWater === "ocean") {
      $("#CityRiver, #CityLake, #RuralOcean, #RuralRiver, #RuralLake").fadeOut();
      $("#CityOcean").fadeIn();
    } else if (userCityOrRural === "3" && userWater === "river" ) {
      $("#CityOcean, #CityLake, #RuralOcean, #RuralRiver, #RuralLake").fadeOut();
      $("#CityRiver").fadeIn();
    } else if (userCityOrRural === "3" && userWater === "lake") {
      $("#CityRiver, #CityOcean, #RuralOcean, #RuralRiver, #RuralLake").fadeOut();
      $("#CityLake").fadeIn();
    } else if (userCityOrRural === "4" && userWater === "ocean") {
      $("#CityRiver, #CityLake, #CityOcean, #RuralRiver, #RuralLake").fadeOut();
      $("#RuralOcean").fadeIn();
    } else if (userCityOrRural === "4" && userWater === "river") {
      $("#CityRiver, #CityLake, #RuralOcean, #CityOcean, #RuralLake").fadeOut();
      $("#RuralRiver").fadeIn();
    } else if (userCityOrRural === "4" && userWater === "lake") {
      $("#CityRiver, #CityLake, #RuralOcean, #RuralOcean, #RuralRiver, #CityOcean").fadeOut();
      $("#RuralLake").fadeIn();
    } 
  })
})