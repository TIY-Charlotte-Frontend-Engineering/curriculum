/*
cherokeeHare({
  startingPopulation: 150,
  birthRate: .10,
  numberOfWeeks: 5,
});
*/
function cherokeeHare(simulation) {
  var total = simulation.startingPopulation;
  
  for (var i = 0; i < simulation.numberOfWeeks; i++) {
    total = total + (total * simulation.birthRate);
  }
  
  return total;
}
