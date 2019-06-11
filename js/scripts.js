$(document).ready(function()  {
  $("#survey form").submit(function(event)  {
    event.preventDefault();
    var userName = $("input#firstName").val();
    var userGender = $("#gender").val();
    var userCityOrRural = $("input#cityORrural").val();
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
      $("#CityOcean").show();
    } else if (userCityOrRural === "3" && userWater === "river" ) {
      $("#CityRiver").show();
    } else if (userCityOrRural === "3" && userWater === "lake") {
      $("#CityLake").show();
    } else if (userCityOrRural === "4" && userWater === "ocean") {
      $("#RuralOcean").show();
    } else if (userCityOrRural === "4" && userWater === "river") {
      $("#RuralRiver").show();
    } else if (userCityOrRural === "4" && userWater === "lake") {
      $("#RuralLake").show();
    } 
  })
})