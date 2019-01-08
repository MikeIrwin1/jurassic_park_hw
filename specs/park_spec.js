const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {
  let park1;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {
    park1 = new Park('Jurassic Park', 5);
    dinosaur1 = new Dinosaur('Raptor', 'Carnivore', 10);
    dinosaur2 = new Dinosaur('Stegosaurus', 'Herbivore', 4);
    dinosaur3 = new Dinosaur('T-Rex', 'Carnivore', 20);
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
    assert.strictEqual(actual, 1);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function () {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    const actual = park1.mostVisitors();
    assert.strictEqual(actual, dinosaur3);
  });

  it('should be able to find all dinosaurs of a particular species', function () {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    const actual = park1.findSpecies('T-Rex')
    assert.deepStrictEqual(actual, [dinosaur3]);
  });

  it('should be able to remove all dinosaurs of a particular species', function () {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    park1.deleteSpecies('T-Rex');
    const actual = park1.dinosaurs.length;
    assert.strictEqual(actual, 2);
  });

  it('should be able to calculate number of visitors per day', function () {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    const actual = park1.visitsPerDay();
    assert.strictEqual(actual, 34);
  });

  it('should be able to calculate visits per year', function () {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    const actual = park1.visitsPerYear();
    assert.strictEqual(actual, 12410)
  })

  it('should calculate yearly revenue', function () {
    park1.addDinosaur(dinosaur1);
    park1.addDinosaur(dinosaur2);
    park1.addDinosaur(dinosaur3);
    const actual = park1.yearlyRevenue();
    assert.strictEqual(actual, 62050)
  })
});
