const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park1;
  let dinosaur1;
  let dinosaur2;

  beforeEach(function () {
    park1 = new Park('Jurassic Park', 5);
    dinosaur1 = new Dinosaur('Raptor', 'Carnivore', 10);
    dinosaur2 = new Dinosaur('Stegosaurus', 'Herbivore', 4);
  })

  it('should have a name', function () {
    const actual = park1.name;
    assert.strictEqual(actual, 'Jurassic Park');
  });

  it('should have a ticket price', function () {
    const actual = park1.price;
    assert.strictEqual(actual, 5);
  });

  it('should have a collection of dinosaurs', function () {
    const actual = park1.dinosaurs.length;
    assert.strictEqual(actual, 0);
  });

  it('should be able to add a dinosaur to its collection', function () {
    park1.addDinosaur(dinosaur1);
    const actual = park1.dinosaurs.length;
    assert.strictEqual(actual, 1);
  });

  it('should be able to remove a dinosaur from its collection', function () {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.deleteDinosaur(dinosaur2);
    const actual = park1.dinosaurs.length;
    assert.strictEqual(actual, 1)
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    const actual = park1.mostVisitors();
    assert.strictEqual(actual, dinosaur1);
  });

  it('should be able to find all dinosaurs of a particular species');

  it('should be able to remove all dinosaurs of a particular species');

});
