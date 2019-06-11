$(document).ready(function()  {
  $(form#survey).submit(function()  {
    var userName = $("firstName").val();
    var userGender = $("gender").val();
    var userCityOrRural = $("cityORrural").val();
    var userClothing = $("clothingType").val();
    var userWater = $("input:radio[name=water-type]:checked").val();

    if (userGender === "Male?") {
      var prefix = "Mr.";
    }
    if (userGender === "Female?") {
      var prefix = "Miss";
    }
    if (userGender === "I prefer not to identify. We are all people!") {
      var prefix = "Non-Demoninational Person"
    }
  })
})