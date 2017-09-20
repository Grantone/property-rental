import Ember from 'ember';

var rentals = [{
  id: 1,
  owner: "Granton Mchana",
  city: "Florida",
  type: "Estate",
  bedrooms: 10,
  image: "img/house3.jpg"
}, {
  id: 2,
  owner: "Don Kim",
  city: "Chicago",
  type: "Masionatte",
  bedrooms: 6,
  image: "img/house2.jpg"
}, {
  id: 3,
  owner: "Brian Vian",
  city: "Nairobi",
  type: "Apartment",
  bedrooms: 5,
  image: "img/house1.jpg"
}];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },
});
