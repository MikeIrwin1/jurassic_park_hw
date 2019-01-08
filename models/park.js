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
  let temp = 0;
  let dinoIndex = 0;
  for (let i=0; i<=this.dinosaurs.length-1; i++) {
    temp = this.dinosaurs[i].guestsAttractedPerDay;
    tempIndex = i;
    if (temp > highest) {
      highest = temp;
      dinoIndex = tempIndex;
    }
  }
  return this.dinosaurs[dinoIndex];
};
module.exports = Park;
