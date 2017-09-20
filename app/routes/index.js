import Ember from 'ember';

var rentals = [{
  id: 1,
  owner: "Granton Mchana",
  city: "Florida",
  type: "Estate",
  bedrooms: 10,
  image: "/assets/img/house3.jpg"
}, {
  id: 2,
  owner: "Don Kim",
  city: "Chicago",
  type: "Masionatte",
  bedrooms: 6,
  image: "/assets/img/house2.jpg"
}, {
  id: 3,
  owner: "Brian Vian",
  city: "Nairobi",
  type: "Apartment",
  bedrooms: 5,
  image: "/assets/img/house1.jpg"
}];

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
  },

  actions: {
    destroyRental(rental) {
      rental.destroyRecord();
      this.transitionTo('index');
    }
  }
});
