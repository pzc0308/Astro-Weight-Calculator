$(document)
 .ready(function() {

   var planets = [
     ['Pluto', 0.06],
     ['Neptune', 1.148],
     ['Uranus', 0.917],
     ['Saturn', 1.139],
     ['Jupiter', 2.640],
     ['Mars', 0.3895],
     ['Moon', 0.1655],
     ['Earth', 1],
     ['Venus', 0.9032],
     ['Mercury', 0.377],
     ['Sun', 27.9]
    ];
  planets = planets.reverse();
//Create a loop to populate your select options
  for (var i = 0; i < planets.length; i++) {
    /*
    Within option tag set in the value of each planet to its gravity in the array above and show the
    name of the planet between the option tags so it displays in my dropdown.
    */
    $("#planetsDropDown").append('<option value=' + planets[i][1] + '>'+ planets[i][0] + '</option>');

}

  $("#calculate").click(function(e) {
    e.preventDefault();
//Create variables that contain all necessary values
      var weight = $("#userWeight").val();
//Use the option tag that I appended under the select tag that the user actually chooses
      var multiplier = $("select option:selected").val();
      var planetName = $("select option:selected").text();

      var result = weight * multiplier

      $("#output").text('If you were on ' + planetName + ', you would weigh ' + Math.round(result) + 'lbs');

    return false;
  });
})
