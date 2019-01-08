const Park = function (name, price) {
  this.name = name;
  this.price = price;
  this.dinosaurs = [];
}

Park.prototype.addDinosaur = function (dinosaur) {
  this.dinosaurs.push(dinosaur);
};
Park.prototype.deleteDinosaur = function (dinosaur) {
  const indexOfDino = this.dinosaurs.indexOf(dinosaur);
  this.dinosaurs.splice(indexOfDino, 1);
};

Park.prototype.mostVisitors = function () {
  let highest = 0;
  let tempGuests = 0;
  let dinoIndex = 0;
  for (let i=0; i<=this.dinosaurs.length-1; i++) {
    tempGuests = this.dinosaurs[i].guestsAttractedPerDay;
    tempIndex = i;
    if (tempGuests > highest) {
      highest = tempGuests;
      dinoIndex = tempIndex;
    }
  }
  return this.dinosaurs[dinoIndex];
};

Park.prototype.findSpecies = function (species) {
  let foundDinos = [];
  for (let i=0; i<=this.dinosaurs.length-1; i++) {
    if (this.dinosaurs[i].species === species) {
      foundDinos.push(this.dinosaurs[i]);
    }
  }
  return foundDinos;
};

Park.prototype.deleteSpecies = function (species) {
  let indexOf;
  for (let i=0; i<=this.dinosaurs.length-1; i++){
    if (this.dinosaurs.species === species){
      indexOf = i;
    }
  }
  this.dinosaurs.splice(indexOf,1);
};

Park.prototype.visitsPerDay = function () {
  let dailyVisits = 0;
  for (let i=0; i<=this.dinosaurs.length-1; i++) {
    dailyVisits += this.dinosaurs[i].guestsAttractedPerDay;
  }
  return dailyVisits;
};

Park.prototype.visitsPerYear = function () {
  let yearlyVisits = 0;
  yearlyVisits = 365 * this.visitsPerDay();
  return yearlyVisits;
};

Park.prototype.yearlyRevenue = function () {
  let yearlyRev = 0;
  yearlyRev = this.price * this.visitsPerYear();
  return yearlyRev
};
module.exports = Park;
