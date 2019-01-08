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
  this.dinosaurs.splice(indexOfDino,1);
};
module.exports = Park;
